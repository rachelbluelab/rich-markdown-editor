import Mark from "./Mark";
import markInputRule from "../lib/markInputRule";

export default class UnderLine extends Mark {
  get name() {
    return "underline";
  }

  get schema() {
    return {
      parseDOM: [{ tag: "ins" }],
      toDOM: () => ["ins"],
    };
  }

  inputRules({ type }) {
    return [markInputRule(/(?:^|[^_])(_([^_]+)_)$/, type)];
  }

  get toMarkdown() {
    return {
      open: "__",
      close: "__",
      mixable: true,
      expelEnclosingWhitespace: true,
    };
  }

  parseMarkdown() {
    return { mark: "ins" };
  }
}
