import {
  FETCH_SUGGESTIONS_PENDING,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_ERROR,
} from './actionTypes';

import api from '../../api';

export function fetchSuggestions() {
  return (dispatch: any) => {
    dispatch(fetchSuggestionsPending()),
      api
        .getSuggestions()
        .then((res) => {
          dispatch(fetchSuggestionsSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchSuggestionsError(err));
        });
  };
}

export function fetchSuggestionsPending() {
  return {
    type: FETCH_SUGGESTIONS_PENDING,
  };
}

export function fetchSuggestionsSuccess(suggestions: any) {
  return {
    type: FETCH_SUGGESTIONS_SUCCESS,
    suggestions: suggestions,
  };
}

export function fetchSuggestionsError(error: any) {
  return {
    type: FETCH_SUGGESTIONS_ERROR,
    error: error,
  };
}
