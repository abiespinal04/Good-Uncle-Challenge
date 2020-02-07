import {
  ADD_ITEM_FETCH,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_FETCH,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from '../types';
const initialState = {payload: [], isLoading: false, error: {}};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_ITEM_SUCCESS:
      console.log('[itemData_]', state.payload);
      return {
        ...state,
        payload: [...state.payload, {...action.payload}],
        isLoading: false,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case DELETE_ITEM_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_ITEM_SUCCESS:
      console.log('[itemData_]', state.payload);
      return {
        ...state,
        payload: [ ...action.payload],
        isLoading: false,
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
