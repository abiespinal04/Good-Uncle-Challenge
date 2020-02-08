import {SUB_TOTAL_FETCH, SUB_TOTAL_SUCCESS, SUB_TOTAL_FAILURE} from '../types';

export const addSubTotal = item => dispatch => {
  dispatch({
    type: SUB_TOTAL_FETCH,
  });
  try {
    dispatch({
      type: SUB_TOTAL_SUCCESS,
      payload: item,
    });
  } catch (err) {
    dispatch({
      type: SUB_TOTAL_FAILURE,
      error: err,
    });
  }
};
