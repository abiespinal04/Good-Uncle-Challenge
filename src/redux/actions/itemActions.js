import {
  ADD_ITEM_FETCH,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_FETCH,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from '../types';

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM_FETCH,
  });
  try {
    dispatch({
      type: ADD_ITEM_SUCCESS,
      payload: item,
    });
  } catch (err) {
    // Update error in reducer on failure
    dispatch({
      type: ADD_ITEM_FAILURE,
      error: err,
    });
  }
};

export const deleteItem = item => dispatch => {
  // console.log("[itemData]", item);
  dispatch({
    type: DELETE_ITEM_FETCH,
  });
  try {
    dispatch({
      type: DELETE_ITEM_SUCCESS,
      payload: item,
    });
  } catch (err) {
    // Update error in reducer on failure
    dispatch({
      type: DELETE_ITEM_FAILURE,
      error: err,
    });
  }
};
