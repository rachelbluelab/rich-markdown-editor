import MarkdownIt from "markdown-it";
import Token from "markdown-it/lib/token";

function isParagraph(token: Token) {
  return token.type === "paragraph_open";
}

function isInline(token: Token) {
  return token.type === "inline" && token.level === 1;
}

function isLinkOpen(token: Token) {
  return token.type === "link_open";
}

function isLinkClose(token: Token) {
  return token.type === "link_close";
}

export default function(getLinkComponent) {
  function isEmbed(token: Token, link: Token) {
    const href = link.attrs[0][1];
    const simpleLink = href === token.content;

    if (!simpleLink) return false;
    return getLinkComponent(href);
  }

  return function markdownEmbeds(md: MarkdownIt) {
    md.core.ruler.after("inline", "embeds", state => {
      const tokens = state.tokens;
      let insideLink;

      for (let i = 0; i < tokens.length - 1; i++) {
        // once we find an inline token look through it's children for links
        if (isInline(tokens[i]) && isParagraph(tokens[i - 1])) {
          for (let j = 0; j < tokens[i].children.length - 1; j++) {
            const current = tokens[i].children[j];
            if (!current) continue;

            if (isLinkOpen(current)) {
              insideLink = current;
              continue;
            }

            if (isLinkClose(current)) {
              insideLink = null;
              continue;
            }

            // of hey, we found a link – lets check to see if it should be
            // considered to be an embed
            if (insideLink) {
              const component = isEmbed(current, insideLink);
              if (component) {
                const { content } = current;

                // convert to embed token
                const token = new Token("embed", "iframe", 0);
                token.attrSet("href", content);
                token.attrSet("component", component);

                // delete the inline link – this makes the assumption that the
                // embed is the only thing in the para.
                // TODO: double check this
                tokens.splice(i - 1, 3, token);
                break;
              }
            }
          }
        }
      }
    });
  };
}