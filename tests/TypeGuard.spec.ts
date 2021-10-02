import TypeGuard from "../src/reliabletxt/TypeGuard";
import TypeException from "../src/reliabletxt/TypeException";

class TestClass1 {
    constructor() {}
}
class TestClass2 {
    constructor() {}
}
class TestClass3 extends TestClass2 {
    constructor() {
        super();
    }
}

describe("TypeGuard", () => {

    /* ===== Boolean ===== */

    it.each`
        param
        ${true}
        ${false}
    `(`TypeGuard.assumeBoolean($param) - boolean parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureBoolean(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    }); 

    it.each`
        param
        ${"abc"}
        ${1}
        ${1.2}
        ${null}
        ${undefined}
        ${[]}
        ${{}}
    `(`TypeGuard.assumeBoolean($param) - boolean parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureBoolean(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Nullable Boolean ===== */

    it.each`
        param
        ${true}
        ${false}
        ${null}
    `(`TypeGuard.assureNullableBoolean($param) - nullable boolean parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableBoolean(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    }); 

    it.each`
        param
        ${"abc"}
        ${1}
        ${1.2}
        ${undefined}
        ${[]}
        ${{}}
    `(`TypeGuard.assureNullableBoolean($param) - nullable boolean parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableBoolean(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== String ===== */

    it.each`
        param
        ${""}
        ${"abc"}
        ${"123"}
    `(`TypeGuard.assumeString($param) - string parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureString(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${1}
        ${1.2}
        ${null}
        ${undefined}
        ${[]}
        ${{}}
    `(`TypeGuard.assumeString($param) - string parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureString(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Nullable String ===== */

    it.each`
        param
        ${""}
        ${"abc"}
        ${"123"}
        ${null}
    `(`TypeGuard.assureNullableString($param) - nullable string parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableString(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${1}
        ${1.2}
        ${undefined}
        ${[]}
        ${{}}
    `(`TypeGuard.assureNullableString($param) - nullable string parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableString(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Number ===== */

    it.each`
        param
        ${1}
        ${99999999}
        ${-1111}
    `(`TypeGuard.assureNumber($param) - number parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNumber(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${"1"}
        ${"1.2"}
        ${1.2}
        ${-1.5}
        ${null}
        ${undefined}
        ${[]}
        ${{}}
    `(`TypeGuard.assureNumber($param) - number parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNumber(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Nullable Number ===== */

    it.each`
        param
        ${1}
        ${99999999}
        ${-1111}
        ${null}
    `(`TypeGuard.assureNullableNumber($param) - number parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableNumber(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${"1"}
        ${"1.2"}
        ${1.2}
        ${-1.5}
        ${undefined}
        ${[]}
        ${{}}
    `(`TypeGuard.assureNullableNumber($param) - number parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableNumber(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Array ===== */

    it(`TypeGuard.assureArray([]) - array parameter check is correct`, () => {
        let result;
        expect(() => {
            result = TypeGuard.assureArray([]);
        }).not.toThrow(TypeException);
        expect(result).toEqual([]);
    });
    
    it.each`
        param
        ${""}
        ${"abc"}
        ${"1,2,3"}
        ${1.2}
        ${-1.5}
        ${null}
        ${undefined}
        ${{}}
    `(`TypeGuard.assureArray($param) - array parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureArray(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Nullable Array ===== */

    it.each`
        param
        ${[]}
        ${[123]}
        ${["abc"]}
        ${null}
    `(`TypeGuard.assureNullableArray($param) - nullable array parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableArray(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${""}
        ${"abc"}
        ${"1,2,3"}
        ${1.2}
        ${-1.5}
        ${undefined}
        ${{}}
    `(`TypeGuard.assureNullableArray($param) - nullable array parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableArray(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Number Array ===== */

    it.each`
        param
        ${[]}
        ${[1,2,3]}
    `(`TypeGuard.assureNumberArray($param) - number array parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNumberArray(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${"1"}
        ${1}
        ${1.2}
        ${null}
        ${undefined}
        ${{}}
        ${[1,"a"]}
        ${[1,{}]}
        ${[1,1.2]}
    `(`TypeGuard.assureNumberArray($param) - number array parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNumberArray(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Nullable Number Array ===== */

    it.each`
        param
        ${[]}
        ${[1,2,3]}
        ${null}
    `(`TypeGuard.assureNullableNumberArray($param) - number array parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableNumberArray(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${"1"}
        ${1}
        ${1.2}
        ${undefined}
        ${{}}
        ${[1,"a"]}
        ${[1,{}]}
        ${[1,1.2]}
    `(`TypeGuard.assureNullableNumberArray($param) - number array parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableNumberArray(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== String Array ===== */

    it.each`
        param
        ${[]}
        ${["a", "b", "c"]}
    `(`TypeGuard.assureStringArray($param) - string array parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureStringArray(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${"1"}
        ${1}
        ${1.2}
        ${null}
        ${undefined}
        ${{}}
        ${[1,"a"]}
        ${[1,{}]}
        ${[1,1.2]}
    `(`TypeGuard.assureStringArray($param) - string array parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureStringArray(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Nullable String Array ===== */

    it.each`
        param
        ${[]}
        ${["a", "b", "c"]}
        ${null}
    `(`TypeGuard.assureNullableStringArray($param) - nullable string array parameter check is correct`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableStringArray(param);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param
        ${"1"}
        ${1}
        ${1.2}
        ${undefined}
        ${{}}
        ${[1,"a"]}
        ${[1,{}]}
        ${[1,1.2]}
    `(`TypeGuard.assureNullableStringArray($param) - nullable string array parameter check failed`, ({ param }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNullableStringArray(param);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== InstanceOf ===== */

    it(`TypeGuard.assureInstanceOf(param, obj) - instance of parameter check works correct`, () => {
        // given
        const InstanceOfClass1 = new TestClass1();
        const InstanceOfClass2 = new TestClass2();
        const InstanceOfClass3 = new TestClass3(); // Extends TestClass2
        
        // then
        let result = undefined;
        expect(() => {
            result = TypeGuard.assureInstanceOf(InstanceOfClass1, TestClass1);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(TestClass1);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureInstanceOf(InstanceOfClass3, TestClass2);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(TestClass2);

        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureInstanceOf(InstanceOfClass1, TestClass2);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);

    });

    /* ===== Nullable InstanceOf ===== */

    it(`TypeGuard.assureNullableInstanceOf(param, obj) - nullable instance of parameter check works correct`, () => {
        // given
        const InstanceOfClass1 = new TestClass1();
        const InstanceOfClass2 = new TestClass2();
        const InstanceOfClass3 = new TestClass3(); // Extends TestClass2
        
        // then
        let result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableInstanceOf(null, TestClass1);
        }).not.toThrow(TypeException);
        expect(result).toEqual(null);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableInstanceOf(InstanceOfClass1, TestClass1);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(TestClass1);

        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableInstanceOf(InstanceOfClass3, TestClass2);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(TestClass2);

        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableInstanceOf(InstanceOfClass1, TestClass2);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);

    });

    /* ===== ArrayOf ===== */

    it(`TypeGuard.assureArrayOf(param, obj) - parameter is an array of instance`, () => {
        // given
        const list1_ok = [
            new TestClass1(),
            new TestClass1()
        ];
        const list2_ok = [
            new TestClass2(),
            new TestClass2()
        ];
        const list2_failed = [
            new TestClass1(),
            new TestClass2()
        ];
        const list3_failed = [
            new TestClass1(),
            "some string",
            new TestClass1()
        ];
        const list4_ok = [
            new TestClass3(),
            new TestClass3()
        ];
        
        // then
        let result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list1_ok, TestClass1);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list2_ok, TestClass2);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list2_failed, TestClass2);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list3_failed, TestClass2);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list4_ok, TestClass2);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);

    });

    /* ===== Nullable ArrayOf ===== */

    it(`TypeGuard.assureNullableArrayOfInstance(param, obj) - parameter is an nullable array of instance`, () => {
        // given
        const list1_ok = [
            new TestClass1(),
            new TestClass1()
        ];
        const list2_ok = [
            new TestClass2(),
            new TestClass2()
        ];
        const list2_failed = [
            new TestClass1(),
            new TestClass2()
        ];
        const list3_failed = [
            new TestClass1(),
            "some string",
            new TestClass1()
        ];
        const list4_ok = [
            new TestClass3(),
            new TestClass3()
        ];
        
        // then
        let result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableArrayOfInstance(null, TestClass1);
        }).not.toThrow(TypeException);
        expect(result).toEqual(null);

        result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableArrayOfInstance(list1_ok, TestClass1);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableArrayOfInstance(list2_ok, TestClass2);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableArrayOfInstance(list2_failed, TestClass2);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableArrayOfInstance(list3_failed, TestClass2);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureNullableArrayOfInstance(list4_ok, TestClass2);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);

    });

});
