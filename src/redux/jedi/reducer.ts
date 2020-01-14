import { IJediState } from './types';

import {
  ADD_JEDI_FAILURE,
  ADD_JEDI_REQUEST,
  ADD_JEDI_SUCCESS,
  FETCH_JEDI_FAILURE,
  FETCH_JEDI_REQUEST,
  FETCH_JEDI_SUCCESS,
} from './constants';

const initialState: IJediState = {
  jedi: [],
  error: {},
};

function jedi(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_JEDI_REQUEST:
      return state;

    case FETCH_JEDI_SUCCESS:
      return [...action.payload.jedi];

    case FETCH_JEDI_FAILURE:
      return state;

    case ADD_JEDI_REQUEST:
      return state;

    case ADD_JEDI_SUCCESS:
      return state;

    case ADD_JEDI_FAILURE:
      return state;

    default:
      return state;
  }
}

export default jedi;
