import { SUB_TOTAL_FETCH, SUB_TOTAL_SUCCESS, SUB_TOTAL_FAILURE} from '../types'
const initialState = {  payload: [],  isLoading: false,  error: {}};


export const subTotalReducer = ( state=initialState, action ) => { 	 
    switch(action.type) {    
        case SUB_TOTAL_FETCH:      
            return {        
                	...state,        
                    isLoading: true    
            };        
        case SUB_TOTAL_SUCCESS:      
        console.log("[itemData]", action);
            return {        
	                ...state,        
                    payload: action.payload,        
                    isLoading: false      
                   };        
        case SUB_TOTAL_FAILURE:      
            return {        
	                ...state,        
                    error: action.error,        
                    isLoading: false            
            };  
		default:      return state;
    }
}