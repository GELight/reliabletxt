import ReliableTxtDocument from "../src/reliabletxt/ReliableTxtDocument";

describe("ReliableTxtDocument", () => {

    it.each`
        param1      | param2    | expected
        ${""}       | ${""}     | ${"\n"}
        ${undefined}| ${null}   | ${"\n"}
        ${"abc"}    | ${"ABC"}  | ${"abc\nABC"}
        ${"123"}    | ${"456"}  | ${"123\n456"}
        ${""}       | ${"test"} | ${"\ntest"}
        ${""}       | ${"test"} | ${"\ntest"}
    `(`constructor('$param1', '$param2').getText() - returns '$expected'`,
        ({ param1, param2, expected }) => {
            // when
            const reliableTxtDocument = new ReliableTxtDocument(param1, param2);
            // then
            expect(reliableTxtDocument.text).toBe(expected);
        });

    it.each`
        text            | expected
        ${""}           | ${""}
        ${undefined}    | ${""}
        ${null}         | ${""}
        ${"abc"}        | ${"abc"}
        ${"123"}        | ${"123"}
        ${"123\nabc"}   | ${"123\nabc"}
    `(`setText('$text') - reliable text content is set correct`,
        ({ text, expected }) => {
            // given
            const reliableTxtDocument = new ReliableTxtDocument();
            // when
            reliableTxtDocument.setText(text);
            // then
            expect(reliableTxtDocument.getText()).toBe(expected);
        });

    it.each`
        codePoints                      | expected
        ${null}                         | ${""}
        ${undefined}                    | ${""}
        ${[65, 90]}                     | ${"AZ"}
        ${[0x404]}                      | ${"Є"}
        ${[42]}                         | ${"*"}
        ${[9731, 9733, 9842, 0x2F804]}  | ${"☃★♲你"}
    `(`setTextByCodePoints('$codePoints') - added codepoints are converted to string`,
        ({ codePoints, expected }) => {
            // given
            const reliableTxtDocument = new ReliableTxtDocument();
            // when
            reliableTxtDocument.setTextByCodePoints(codePoints);
            // then
            expect(reliableTxtDocument.getText()).toEqual(expected);
        });

    it.each`
        text                            | expected
        ${null}                         | ${[]}
        ${undefined}                    | ${[]}
        ${""}                           | ${[]}
        ${"abc"}                        | ${[97, 98, 99]}
        ${"abc 123"}                    | ${[97, 98, 99, 32, 49, 50, 51]}
        ${"abc\n123"}                   | ${[97, 98, 99, 10, 49, 50, 51]}
        ${"Є"}                          | ${[0x404]}
        ${"*"}                          | ${[42]}
        ${"☃★♲你"}                      | ${[9731, 9733, 9842, 0x2F804]}
    `(`getTextAsCodePoints('$text') - text is converted to codepoints correct`,
        ({ text, expected }) => {
            // given
            const reliableTxtDocument = new ReliableTxtDocument();
            // when
            reliableTxtDocument.setText(text);
            // then
            expect(reliableTxtDocument.getTextAsCodePoints()).toEqual(expected);
        });

    it.each`
        param1      | param2    | expected
        ${""}       | ${""}     | ${"\n"}
        ${""}       | ${null}   | ${"\n"}
        ${undefined}| ${null}   | ${"\n"}
        ${"abc"}    | ${"ABC"}  | ${"abc\nABC"}
        ${"123"}    | ${"456"}  | ${"123\n456"}
        ${""}       | ${"test"} | ${"\ntest"}
    `(`setLines('$param1', '$param2') - lines will set as text`,
        ({ param1, param2, expected }) => {
            // given
            const reliableTxtDocument = new ReliableTxtDocument();
            // when
            reliableTxtDocument.setLines(param1, param2);
            // then
            expect(reliableTxtDocument.getText()).toEqual(expected);
        });

    it.each`
        param1          | param2        | expected
        ${""}           | ${""}         | ${["", ""]}
        ${""}           | ${null}       | ${["", ""]}
        ${undefined}    | ${null}       | ${["", ""]}
        ${"abc"}        | ${"ABC"}      | ${["abc", "ABC"]}
        ${"123"}        | ${"456"}      | ${["123", "456"]}
        ${""}           | ${"test"}     | ${["", "test"]}
        ${"abc\ndef"}   | ${"test"}     | ${["abc", "def", "test"]}
    `(`setLines('$param1', '$param2').getLines() - content will returned as line based string array`,
        ({ param1, param2, expected }) => {
            // given
            const reliableTxtDocument = new ReliableTxtDocument();
            // when
            reliableTxtDocument.setLines(param1, param2);
            // then
            expect(reliableTxtDocument.getLines()).toEqual(expected);
        });

    it(`toString() - content will returned as string`, () => {
        // when
        const reliableTxtDocument = new ReliableTxtDocument();
        // then
        expect(reliableTxtDocument.toString()).toEqual("");
        // and
        const content = `
        a 	U+0061    61            0061        "Latin Small Letter A"
        ~ 	U+007E    7E            007E        Tilde
        ¥ 	U+00A5    C2_A5         00A5        "Yen Sign"
        » 	U+00BB    C2_BB         00BB        "Right-Pointing Double Angle Quotation Mark"
        ½ 	U+00BD    C2_BD         00BD        "Vulgar Fraction One Half"
        ¿ 	U+00BF    C2_BF         00BF        "Inverted Question Mark"
        ß 	U+00DF    C3_9F         00DF        "Latin Small Letter Sharp S"
        ä 	U+00E4    C3_A4         00E4        "Latin Small Letter A with Diaeresis"
        ï 	U+00EF    C3_AF         00EF        "Latin Small Letter I with Diaeresis"
        œ 	U+0153    C5_93         0153        "Latin Small Ligature Oe"
        € 	U+20AC    E2_82_AC      20AC        "Euro Sign"
        東 	U+6771    E6_9D_B1      6771        "CJK Unified Ideograph-6771"
        𝄞 	U+1D11E   F0_9D_84_9E   D834_DD1E   "Musical Symbol G Clef"
        𠀇 	U+20007   F0_A0_80_87   D840_DC07   "CJK Unified Ideograph-20007"
        `;
        reliableTxtDocument.setText(content);
        // then
        expect(reliableTxtDocument.toString()).toEqual(content);
    });

    it(`join() - string array will convert to string`, () => {
        // when
        const contentArray = [
            `a 	U+0061    61            0061        "Latin Small Letter A"`,
            `~ 	U+007E    7E            007E        Tilde`,
            `¥ 	U+00A5    C2_A5         00A5        "Yen Sign"`,
            `» 	U+00BB    C2_BB         00BB        "Right-Pointing Double Angle Quotation Mark"`,
            `½ 	U+00BD    C2_BD         00BD        "Vulgar Fraction One Half"`,
            `¿ 	U+00BF    C2_BF         00BF        "Inverted Question Mark"`,
            `ß 	U+00DF    C3_9F         00DF        "Latin Small Letter Sharp S"`,
            `ä 	U+00E4    C3_A4         00E4        "Latin Small Letter A with Diaeresis"`,
            `ï 	U+00EF    C3_AF         00EF        "Latin Small Letter I with Diaeresis"`,
            `œ 	U+0153    C5_93         0153        "Latin Small Ligature Oe"`,
            `€ 	U+20AC    E2_82_AC      20AC        "Euro Sign"`,
            `東 	U+6771    E6_9D_B1      6771        "CJK Unified Ideograph-6771"`,
            `𝄞 	U+1D11E   F0_9D_84_9E   D834_DD1E   "Musical Symbol G Clef"`,
            `𠀇 	U+20007   F0_A0_80_87   D840_DC07   "CJK Unified Ideograph-20007"`
        ];
        const convertedString = ReliableTxtDocument.join(contentArray);
        // then
        expect(convertedString).toBe(`a 	U+0061    61            0061        "Latin Small Letter A"
~ 	U+007E    7E            007E        Tilde
¥ 	U+00A5    C2_A5         00A5        "Yen Sign"
» 	U+00BB    C2_BB         00BB        "Right-Pointing Double Angle Quotation Mark"
½ 	U+00BD    C2_BD         00BD        "Vulgar Fraction One Half"
¿ 	U+00BF    C2_BF         00BF        "Inverted Question Mark"
ß 	U+00DF    C3_9F         00DF        "Latin Small Letter Sharp S"
ä 	U+00E4    C3_A4         00E4        "Latin Small Letter A with Diaeresis"
ï 	U+00EF    C3_AF         00EF        "Latin Small Letter I with Diaeresis"
œ 	U+0153    C5_93         0153        "Latin Small Ligature Oe"
€ 	U+20AC    E2_82_AC      20AC        "Euro Sign"
東 	U+6771    E6_9D_B1      6771        "CJK Unified Ideograph-6771"
𝄞 	U+1D11E   F0_9D_84_9E   D834_DD1E   "Musical Symbol G Clef"
𠀇 	U+20007   F0_A0_80_87   D840_DC07   "CJK Unified Ideograph-20007"`);
    });

});
