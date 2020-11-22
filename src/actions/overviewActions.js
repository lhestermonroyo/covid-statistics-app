import { OVERVIEW_BEGIN, OVERVIEW_END, OVERVIEW_SUCCESS, OVERVIEW_SHOW_ALERT, OVERVIEW_HIDE_ALERT, CLEAR_OVERVIEW_STATES } from '../constants/overviewConstants';
import axios from 'axios';

export const overviewBegin = () => ({ type: OVERVIEW_BEGIN });

export const overviewEnd = () => ({ type: OVERVIEW_END });

export const overviewSuccess = (result) => ({
  type: OVERVIEW_SUCCESS,
  payload: result
});

export const overviewShowAlert = (alertData) => ({
  type: OVERVIEW_SHOW_ALERT,
  payload: alertData
});

export const overviewHideAlert = () => ({
  type: OVERVIEW_HIDE_ALERT,
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
      dispatch(overviewShowAlert({ message: 'An error occured while fetching data.', type: 'error' }));

    }
  } catch (err) {
    dispatch(overviewEnd());
    dispatch(overviewShowAlert({ message: err, type: 'error' }));
  }
};

export const clearOverviewStates = () => ({
  type: CLEAR_OVERVIEW_STATES
})