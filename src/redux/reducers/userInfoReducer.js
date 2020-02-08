import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_FETCH,
} from '../types';
const initialState = {
  phoneNumber: '',
  password: '',
  isLoading: false,
  error: {},
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        phoneNumber: action.payload.phoneNumber,
        password: action.payload.password,
        isLoading: false,
      };
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
