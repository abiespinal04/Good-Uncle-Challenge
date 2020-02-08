import {
  ADD_ITEM_FETCH,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_FETCH,
  DELETE_ITEM_SUCCESS,
  ADD_PRICE_TOTAL,
  SUBTRACT_PRICE_TOTAL,
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
    dispatch({
      type: ADD_PRICE_TOTAL,
      price: Number(item.productOptions[0].price),
    });
  } catch (err) {
    dispatch({
      type: ADD_ITEM_FAILURE,
      error: err,
    });
  }
};

export const deleteItem = itemData => dispatch => {
  const {newItemList} = itemData;
  dispatch({
    type: DELETE_ITEM_FETCH,
  });
  try {
    dispatch({
      type: DELETE_ITEM_SUCCESS,
      payload: newItemList,
    });
    dispatch({
      type: SUBTRACT_PRICE_TOTAL,
      price: Number(itemData.item[0].productOptions[0].price),
    });
  } catch (err) {
    dispatch({
      type: DELETE_ITEM_FAILURE,
      error: err,
    });
  }
};
