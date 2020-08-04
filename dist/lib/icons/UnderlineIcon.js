"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const fi_1 = require("react-icons/fi");
function UnderlineIcon({ size, color }) {
    return (React.createElement("span", { style: { color: color } },
        React.createElement(fi_1.FiUnderline, { size: size })));
}
exports.default = UnderlineIcon;
//# sourceMappingURL=UnderlineIcon.js.map