import { fetchJediSuccess } from '../actions';
import { FETCH_JEDI_SUCCESS } from '../constants';

describe('jediActions', () => {
  describe('fetchJediSuccess', () => {
    it('should create an action to fetchJediSuccess', () => {
      const jedi = [
        {
          id: 2,
          name: 'dark vador',
        },
      ];

      const expectedActions = {
        type: FETCH_JEDI_SUCCESS,
        payload: {
          jedi,
        },
      };

      expect(fetchJediSuccess(jedi)).toEqual(expectedActions);
    });
  });
});
