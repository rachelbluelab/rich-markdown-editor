import Mark from "./Mark";
export default class UnderLine extends Mark {
    get name(): string;
    get schema(): {
        parseDOM: {
            tag: string;
        }[];
        toDOM: () => string[];
    };
    inputRules({ type }: {
        type: any;
    }): import("prosemirror-inputrules").InputRule<any>[];
    get toMarkdown(): {
        open: string;
        close: string;
        mixable: boolean;
        expelEnclosingWhitespace: boolean;
    };
    parseMarkdown(): {
        mark: string;
    };
}
//# sourceMappingURL=UnderLine.d.ts.map