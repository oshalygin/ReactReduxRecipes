import expect from 'expect';
import { loadState, saveState } from './localStorage';

describe('Local Storage', () => {
  global.localStorage = {
    getItem(key) {
      return JSON.stringify({
        [key]: {
          recipes: [{ type: 'Mexican' }]
        }
      });
    },
    setItem(key, object) {
      return { success: true, object };
    }
  };
  it('Loading the state properly returns the object from the key', () => {

    const actual = !!loadState().state.recipes;
    expect(actual).toBeTruthy();

  });

  it('Persisting the state properly saves the object to the state', () => {
    const state = {
      recipes: [
        { type: 'Mexican' }
      ]
    };
    saveState(state);
  });
});
