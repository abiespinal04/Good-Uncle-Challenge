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
    // Initiate loading state
    dispatch({
      type: USER_LOGIN_FETCH,
    });
    try {
      // Call the API
      const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      // Update payload in reducer on success
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result,
        currentPage: args.pageCount,
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: USER_LOGIN_FAILURE,
        error: err,
      });
    }
  };
};

export const userRegister = userData =>  dispatch => {
    // console.log("[userData]", userData);
    dispatch({
        type: USER_REGISTER_FETCH,
      });
      try {
        // Call the API
      //   const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
        // Update payload in reducer on success
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: userData,
        });
      } catch (err) {
        // Update error in reducer on failure
        dispatch({
          type: USER_REGISTER_FAILURE,
          error: err,
        });
      }
  };

