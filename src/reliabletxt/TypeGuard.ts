import TypeException from "./TypeException";

export default class TypeGuard {

    public static assureBoolean(param: boolean): boolean {
        if (typeof param !== "boolean") {
            throw new TypeException(`The argument of the type '${typeof param}' must be a 'boolean'`);
        }
        return param;
    }
    
    public static assureNullableBoolean(param: boolean|null): boolean {
        if (param === null) {
            return param;
        } else {
            try {
                return TypeGuard.assureBoolean(param);
            }
            catch (e) {
                throw new TypeException(`The argument of the type '${typeof param}' must be 'null | boolean'`);
            }
        }
    }

    public static assureString(param: string): string {
        if (typeof param !== "string") {
            throw new TypeException(`The argument of the type '${typeof param}' must be an 'string'`);
        }
        return param;
    }
    
    public static assureNullableString(param: string|null): string {
        if (param === null) {
            return param;
        } else {
            try {
                return TypeGuard.assureString(param);
            }
            catch (e) {
                throw new TypeException(`The argument of the type '${typeof param}' must be 'null | string'`);
            }
        }
    }

    public static assureNumber(param: number): number {
        if (!Number.isInteger(param)) {
            throw new TypeException(`The argument of the type '${typeof param}' must be an 'number'`);
        }
        return param;
    }
    
    public static assureNullableNumber(param: number|null): number {
        if (param === null) {
            return param;
        } else {
            try {
                return TypeGuard.assureNumber(param);
            }
            catch (e) {
                throw new TypeException(`The argument of the type '${typeof param}' must be 'null | number'`);
            }
        }
    }

    public static assureArray(param: any): Array<any> {
        if (!Array.isArray(param)) {
            throw new TypeException(`The argument type must be an 'array'`);
        }
        return param;
    }
    
    public static assureNullableArray(param: Array<any>|null): Array<any> {
        if (param === null) {
            return param;
        } else {
            try {
                return TypeGuard.assureArray(param);
            }
            catch (e) {
                throw new TypeException(`The argument of the type '${typeof param}' must be 'array | null'`);
            }
        }
    }

    public static assureNumberArray(param: Array<number>): Array<number> {
        let type = "number array";
        if (Array.isArray(param)) {
            for (const item of param) {
                TypeGuard.assureNumber(item);
            }
        } else {
            throw new TypeException(`The argument of the type '${typeof param}' must be an '${type}'`);
        }
        return param;
    }
    
    public static assureNullableNumberArray(param: number[]|null): number[] {
        if (param === null) {
            return param;
        } else {
            try {
                return TypeGuard.assureNumberArray(param);
            }
            catch (e) {
                throw new TypeException(`The argument of the type '${typeof param}' must be 'number array | null'`);
            }
        }
    }

    public static assureStringArray(param: string[]): string[] {
        if (Array.isArray(param)) {
            for (const item of param) {
                TypeGuard.assureString(item);
            }
        } else {
            throw new TypeException(`The argument of the type '${typeof param}' must be an 'string array'`);
        }
        return param;
    }
    
    public static assureNullableStringArray(param: string[]|null): string[] {
        if (param === null) {
            return param;
        } else {
            try {
                return TypeGuard.assureStringArray(param);
            }
            catch (e) {
                throw new TypeException(`The argument of the type '${typeof param}' must be 'string array | null'`);
            }
        }
    }

    public static assureInstanceOf(param: any, obj: any): any {
        if (!(param instanceof obj)) {
            throw new TypeException(`The argument of the type '${typeof param}' must be an array of ${obj}`);
        }
        return param;
    }

    public static assureNullableInstanceOf(param: any, obj: any): any {
        if (param === null) {
            return param;
        } else {
            try {
                return TypeGuard.assureInstanceOf(param, obj);
            }
            catch (e) {
                throw new TypeException(`The argument of the type '${typeof param}' must be an array of '${obj} | null'`);
            }
        }
    }

    public static assureArrayOfInstance(param: any, obj: any): any {
        if (Array.isArray(param)) {
            for (const item of param) {
                TypeGuard.assureInstanceOf(item, obj);
            }
        } else {
            throw new TypeException(`The argument of the type '${typeof param}' must be an instance of ${obj}`);
        }
        return param;
    }

    public static assureNullableArrayOfInstance(param: any, obj: any): any {
        if (param === null) {
            return param;
        } else {
            try {
                return TypeGuard.assureArrayOfInstance(param, obj);
            }
            catch (e) {
                throw new TypeException(`The argument of the type '${typeof param}' must be an array of '${obj} | null'`);
            }
        }
    }

}
