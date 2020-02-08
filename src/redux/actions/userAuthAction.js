import {
  USER_LOGIN_FETCH,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_FETCH,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from '../types';
export const userLogin = user => {
  return async dispatch => {
    dispatch({
      type: USER_LOGIN_FETCH,
    });
    try {
      const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result,
      });
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILURE,
        error: err,
      });
    }
  };
};

export const userRegister = userData => dispatch => {
  dispatch({
    type: USER_REGISTER_FETCH,
  });
  try {
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: userData,
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      error: err,
    });
  }
};
