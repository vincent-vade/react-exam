import {
  ADD_JEDI_FAILURE,
  ADD_JEDI_REQUEST,
  ADD_JEDI_SUCCESS,
  FETCH_JEDI_FAILURE,
  FETCH_JEDI_REQUEST,
  FETCH_JEDI_SUCCESS,
} from './constants';

export interface IJediState {
  jedi: Array<IJedi>;
  error: any;
}

export interface IJedi {
  id: number;
  name: string;
}

interface IFetchRequestAction {
  type: typeof FETCH_JEDI_REQUEST;
}

interface IFetchJediSuccessAction {
  type: typeof FETCH_JEDI_SUCCESS;
  payload: {
    jedi: Array<IJedi>;
  };
}

interface IFetchJediErrorAction {
  type: typeof FETCH_JEDI_FAILURE;
  payload: any;
}

interface IAddJediRequestAction {
  type: typeof ADD_JEDI_REQUEST;
}

interface IAddJediSuccessAction {
  type: typeof ADD_JEDI_SUCCESS;
}

interface IAddJediFailureAction {
  type: typeof ADD_JEDI_FAILURE;
  payload: any;
}

export type JediActionTypes =
  | IFetchRequestAction
  | IFetchJediSuccessAction
  | IFetchJediErrorAction
  | IAddJediRequestAction
  | IAddJediSuccessAction
  | IAddJediFailureAction;
