import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "  The TypeScript developer job market in Israel's Tel Aviv ",
        expected: ['the', 'typescript', 'developer', 'job', 'market', 'in', "israel's", 'tel', 'aviv'],
    },
    {
        input: "  Value equality is based on the SameValueZero algorithm",
        expected: ['value', 'equality', 'is', 'based', 'on', 'the', 'samevaluezero', 'algorithm'],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
