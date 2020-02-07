import { SUB_TOTAL_FETCH, SUB_TOTAL_SUCCESS, SUB_TOTAL_FAILURE} from '../types'

export const addSubTotal = item =>  dispatch => {
    // console.log("[itemData]", item);
    dispatch({
        type: SUB_TOTAL_FETCH,
      });
      try {
        // Call the API
      //   const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
        // Update payload in reducer on success
        dispatch({
          type: SUB_TOTAL_SUCCESS,
          payload: item,
        });
      } catch (err) {
        // Update error in reducer on failure
        dispatch({
          type: SUB_TOTAL_FAILURE,
          error: err,
        });
      }
  };