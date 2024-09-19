import {getStarRating } from "../ConfidenceRating";

describe("getStarRating Utility methods", () => {
    const testCases = [
        {
            input: 10,
            expected: 1
        }
    ]

    test.each(testCases)("getStarRating(%p) should return %p", ( {input, expected}) => {
        expect(getStarRating(input)).toBe(expected);
    });
});
