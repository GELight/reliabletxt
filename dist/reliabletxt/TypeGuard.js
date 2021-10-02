"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeException_1 = __importDefault(require("./TypeException"));
class TypeGuard {
    static assureBoolean(param) {
        if (typeof param !== "boolean") {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be a 'boolean'`);
        }
        return param;
    }
    static assureNullableBoolean(param) {
        if (param === null) {
            return param;
        }
        else {
            try {
                return TypeGuard.assureBoolean(param);
            }
            catch (e) {
                throw new TypeException_1.default(`The argument of the type '${typeof param}' must be 'null | boolean'`);
            }
        }
    }
    static assureString(param) {
        if (typeof param !== "string") {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an 'string'`);
        }
        return param;
    }
    static assureNullableString(param) {
        if (param === null) {
            return param;
        }
        else {
            try {
                return TypeGuard.assureString(param);
            }
            catch (e) {
                throw new TypeException_1.default(`The argument of the type '${typeof param}' must be 'null | string'`);
            }
        }
    }
    static assureNumber(param) {
        if (!Number.isInteger(param)) {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an 'number'`);
        }
        return param;
    }
    static assureNullableNumber(param) {
        if (param === null) {
            return param;
        }
        else {
            try {
                return TypeGuard.assureNumber(param);
            }
            catch (e) {
                throw new TypeException_1.default(`The argument of the type '${typeof param}' must be 'null | number'`);
            }
        }
    }
    static assureArray(param) {
        if (!Array.isArray(param)) {
            throw new TypeException_1.default(`The argument type must be an 'array'`);
        }
        return param;
    }
    static assureNullableArray(param) {
        if (param === null) {
            return param;
        }
        else {
            try {
                return TypeGuard.assureArray(param);
            }
            catch (e) {
                throw new TypeException_1.default(`The argument of the type '${typeof param}' must be 'array | null'`);
            }
        }
    }
    static assureNumberArray(param) {
        let type = "number array";
        if (Array.isArray(param)) {
            for (const item of param) {
                TypeGuard.assureNumber(item);
            }
        }
        else {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an '${type}'`);
        }
        return param;
    }
    static assureNullableNumberArray(param) {
        if (param === null) {
            return param;
        }
        else {
            try {
                return TypeGuard.assureNumberArray(param);
            }
            catch (e) {
                throw new TypeException_1.default(`The argument of the type '${typeof param}' must be 'number array | null'`);
            }
        }
    }
    static assureStringArray(param) {
        if (Array.isArray(param)) {
            for (const item of param) {
                TypeGuard.assureString(item);
            }
        }
        else {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an 'string array'`);
        }
        return param;
    }
    static assureNullableStringArray(param) {
        if (param === null) {
            return param;
        }
        else {
            try {
                return TypeGuard.assureStringArray(param);
            }
            catch (e) {
                throw new TypeException_1.default(`The argument of the type '${typeof param}' must be 'string array | null'`);
            }
        }
    }
    static assureInstanceOf(param, obj) {
        if (!(param instanceof obj)) {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an array of ${obj}`);
        }
        return param;
    }
    static assureNullableInstanceOf(param, obj) {
        if (param === null) {
            return param;
        }
        else {
            try {
                return TypeGuard.assureInstanceOf(param, obj);
            }
            catch (e) {
                throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an array of '${obj} | null'`);
            }
        }
    }
    static assureArrayOfInstance(param, obj) {
        if (Array.isArray(param)) {
            for (const item of param) {
                TypeGuard.assureInstanceOf(item, obj);
            }
        }
        else {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an instance of ${obj}`);
        }
        return param;
    }
    static assureNullableArrayOfInstance(param, obj) {
        if (param === null) {
            return param;
        }
        else {
            try {
                return TypeGuard.assureArrayOfInstance(param, obj);
            }
            catch (e) {
                throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an array of '${obj} | null'`);
            }
        }
    }
}
exports.default = TypeGuard;
//# sourceMappingURL=TypeGuard.js.map