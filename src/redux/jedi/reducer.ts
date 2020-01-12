import { IJedi, IJediState } from './types';

import {
  FETCH_JEDI_FAILURE,
  FETCH_JEDI_REQUEST,
  FETCH_JEDI_SUCCESS,
} from './constants';

const initialState = {
  jedi: [],
  error: {},
};

function jedi(state: IJediState = initialState, action: any) {
  switch (action.type) {
    case FETCH_JEDI_REQUEST:
      return state;

    case FETCH_JEDI_SUCCESS:
      return [...action.payload.jedi, ...state.jedi];

    case FETCH_JEDI_FAILURE:
      return state;

    default:
      return state;
  }
}

export default jedi;
