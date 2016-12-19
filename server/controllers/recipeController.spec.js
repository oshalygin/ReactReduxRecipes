import recipeController from './recipeController';
import expect from 'expect';

describe('Recipe Controller', () => {

  it('status of 200 is returned when a successful get is made', () => {
    const expected = 200;
    const dataAccessMock = {
      getAllRecipes(query, callback) {
        const recipe = {
          type: 'Mexican'
        };
        callback(null, recipe);
      }
    };

    const sut = recipeController(dataAccessMock);

    const request = {
      body: {
        type: 'Mexican'
      }
    };
    const response = {
      status(statusCode) {
        expect(statusCode).toEqual(expected);
        return this;
      },
      json() { }
    };

    sut.get(request, response);

  });
});
