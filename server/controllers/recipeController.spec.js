import recipeController from "./recipeController";
import expect from "expect";

describe("Recipe Controller", () => {

    it("status of 200 is returned when a successful get is made", () => {
        const expected = 200;
        const dataAccessMock = {
            getAllRecipes: function (query, callback) {
                const recipe = {
                    type: "Mexican"
                };
                callback(null, recipe);
            }
        };

        let sut = recipeController(dataAccessMock);

        let request = {
            body: {
                type: "Mexican"
            }
        };
        let response = {
            status: function (statusCode) {
                expect(statusCode).toEqual(expected);
                return this;
            },
            json: function () { }
        };

        sut.get(request, response);

    });
});