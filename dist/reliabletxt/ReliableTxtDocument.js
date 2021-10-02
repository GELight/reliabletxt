"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = __importDefault(require("./StringUtil"));
const TypeGuard_1 = __importDefault(require("./TypeGuard"));
class ReliableTxtDocument {
    constructor(...args) {
        this.text = "";
        TypeGuard_1.default.assureStringArray(args);
        this.text = args.join("\n");
        return this;
    }
    static join(lines) {
        TypeGuard_1.default.assureStringArray(lines);
        return new ReliableTxtDocument(...lines).toString();
    }
    setText(text) {
        TypeGuard_1.default.assureString(text);
        if (text !== null && text !== undefined) {
            this.text = text;
        }
    }
    setTextByCodePoints(codePoints) {
        TypeGuard_1.default.assureNumberArray(codePoints);
        if (codePoints !== null &&
            codePoints !== undefined &&
            Array.isArray(codePoints)) {
            this.text = StringUtil_1.default.codePointsToString(codePoints);
        }
    }
    getText() {
        return this.text;
    }
    getTextAsCodePoints() {
        return StringUtil_1.default.stringToCodePoints(this.text);
    }
    setLines(...lines) {
        TypeGuard_1.default.assureStringArray(lines);
        this.text = lines.join("\n");
    }
    getLines() {
        return this.text.split("\n");
    }
    toString() {
        return this.text;
    }
}
exports.default = ReliableTxtDocument;
//# sourceMappingURL=ReliableTxtDocument.js.map