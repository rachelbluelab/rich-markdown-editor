"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mark_1 = __importDefault(require("./Mark"));
const markInputRule_1 = __importDefault(require("../lib/markInputRule"));
class UnderLine extends Mark_1.default {
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
        return [markInputRule_1.default(/(?:^|[^_])(_([^_]+)_)$/, type)];
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
exports.default = UnderLine;
//# sourceMappingURL=UnderLine.js.map