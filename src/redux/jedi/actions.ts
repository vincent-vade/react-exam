import {
  ADD_JEDI_FAILURE,
  ADD_JEDI_REQUEST,
  ADD_JEDI_SUCCESS,
  FETCH_JEDI_FAILURE,
  FETCH_JEDI_REQUEST,
  FETCH_JEDI_SUCCESS,
} from './constants';
import { getJedi, newJedi } from '../../services/api/jedi';
import { IJedi, JediActionTypes } from './types';

const fetchJediRequest = () => ({
  type: FETCH_JEDI_REQUEST,
});

export const fetchJediSuccess = (jedi: Array<IJedi>): JediActionTypes => ({
  type: FETCH_JEDI_SUCCESS,
  payload: {
    jedi,
  },
});

const fetchJediFailure = (error: any): JediActionTypes => ({
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

const addJediRequest = () => ({
  type: ADD_JEDI_REQUEST,
});

const addJediSuccess = (): JediActionTypes => ({
  type: ADD_JEDI_SUCCESS,
});

const addJediFailure = (error: any): JediActionTypes => ({
  type: ADD_JEDI_FAILURE,
  payload: {
    error,
  },
});

export const addJedi = (name: string) => async (dispatch: any) => {
  dispatch(addJediRequest());
  try {
    await newJedi(name);
    dispatch(addJediSuccess());
  } catch (e) {
    dispatch(addJediFailure(e));
  }
};
