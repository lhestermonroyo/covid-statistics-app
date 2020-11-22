import { OVERVIEW_BEGIN, OVERVIEW_END, OVERVIEW_SUCCESS, OVERVIEW_FAILED, CLEAR_OVERVIEW_STATES } from '../constants/overviewConstants';
import axios from 'axios';

export const overviewBegin = () => ({ type: OVERVIEW_BEGIN });

export const overviewEnd = () => ({ type: OVERVIEW_END });

export const overviewSuccess = (result) => ({
  type: OVERVIEW_SUCCESS,
  payload: result
});

export const overviewFailed = (error) => ({
  type: OVERVIEW_FAILED,
  payload: error
});

export const getSummaryGlobal = () => async (dispatch) => {
  dispatch(overviewBegin());

  try {
    const result = await axios.get('https://api.covid19api.com/summary');

    if (result) {
      dispatch(overviewEnd());
      dispatch(overviewSuccess(result.data));
    } else {
      dispatch(overviewEnd());
      dispatch(overviewFailed('An error occured while fetching data.'));

    }
  } catch (err) {
    dispatch(overviewEnd());
    dispatch(overviewFailed(err));
  }
};

export const clearOverviewStates = () => ({
  type: CLEAR_OVERVIEW_STATES
})