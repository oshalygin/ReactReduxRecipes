import expect from "expect";

describe("Server Sanity Check", () => {
    describe("Simple math", () => {
        it("5+5 = 10", () => {
            const expected = 10;

            const a = 5;
            const b = 5;
            let actual = a + b;

            expect(actual).toEqual(expected);
        });
    });
});