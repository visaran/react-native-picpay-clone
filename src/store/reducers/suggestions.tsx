import {
  FETCH_SUGGESTIONS_PENDING,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_ERROR,
} from '../actions/actionTypes';

import api from '../../api';

const initialState: any = {
  pending: false,
  suggestions: [],
  error: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case FETCH_SUGGESTIONS_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case FETCH_SUGGESTIONS_SUCCESS: {
      return {
        ...state,
        pending: false,
        suggestions: action.payload,
      };
    }
    case FETCH_SUGGESTIONS_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
