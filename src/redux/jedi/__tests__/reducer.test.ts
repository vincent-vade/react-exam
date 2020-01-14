import jediReducer from '../reducer';
import { FETCH_JEDI_SUCCESS } from '../constants';

describe('jediReducer', () => {
  it('should return the initial state', () => {
    expect(
      jediReducer(undefined, {
        type: '@@init',
      }),
    ).toEqual({
      jedi: [],
      error: {},
    });
  });

  it('should handle FETCH_JEDI_SUCCESS', () => {
    const jedi = [
      {
        id: 1,
        name: 'yoda',
      },
      {
        id: 2,
        name: 'Luke Skywalker',
      },
    ];

    const action = {
      type: FETCH_JEDI_SUCCESS,
      payload: {
        jedi,
      },
    };

    const reducer = jediReducer(
      {
        jedi: [],
        error: {},
      },
      action,
    );

    expect(reducer).toEqual(jedi);
  });
});
