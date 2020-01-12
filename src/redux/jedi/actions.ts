import {
  FETCH_JEDI_FAILURE,
  FETCH_JEDI_REQUEST,
  FETCH_JEDI_SUCCESS,
} from './constants';
import { getJedi } from '../../services/api/jedi';
import { IJedi } from './types';

const fetchJediRequest = () => ({
  type: FETCH_JEDI_REQUEST,
});

const fetchJediSuccess = (jedi: IJedi) => ({
  type: FETCH_JEDI_SUCCESS,
  payload: {
    jedi,
  },
});

const fetchJediFailure = (error: any) => ({
  type: FETCH_JEDI_FAILURE,
  payload: {
    error,
  },
});

export const fetchJedi = () => async (dispatch: any) => {
  dispatch(fetchJediRequest());
  try {
    const jedi = await getJedi();
    return dispatch(fetchJediSuccess(jedi));
  } catch (error) {
    dispatch(fetchJediFailure(error));
  }
};
