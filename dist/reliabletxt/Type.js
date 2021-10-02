"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeException_1 = __importDefault(require("./TypeException"));
class Type {
    static assureString(param) {
        let type = "string";
        if (typeof param !== type) {
            throw new TypeException_1.default(`The argument of the type "${typeof param}" must be an "${type}"`);
        }
        return true;
    }
    static assureNumber(param) {
        let type = "number";
        if (!Number.isInteger(param)) {
            throw new TypeException_1.default(`The argument of the type "${typeof param}" must be an "${type}"`);
        }
        return true;
    }
    static assureArray(param) {
        let type = "array";
        if (!Array.isArray(param)) {
            throw new TypeException_1.default(`The argument type must be an "${type}"`);
        }
        return true;
    }
    static assureNumberArray(param) {
        let type = "number array";
        if (Array.isArray(param)) {
            for (const item of param) {
                Type.assureNumber(item);
            }
        }
        else {
            throw new TypeException_1.default(`The argument of the type "${typeof param}" must be an "${type}"`);
        }
        return true;
    }
}
exports.default = Type;
//# sourceMappingURL=Type.js.map