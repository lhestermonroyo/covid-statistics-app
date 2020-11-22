import { COUNTRIES_BEGIN, COUNTRIES_END, COUNTRIES_SUCCESS, COUNTRIES_SHOW_ALERT, COUNTRIES_HIDE_ALERT, CLEAR_COUNTRIES_STATES } from '../constants/contriesConstants';
import axios from 'axios';

export const countriesBegin = () => ({ type: COUNTRIES_BEGIN });

export const countriesEnd = () => ({ type: COUNTRIES_END });

export const countriesSuccess = (result) => ({
  type: COUNTRIES_SUCCESS,
  payload: result
});

export const countriesShowAlert = (alertData) => ({
  type: COUNTRIES_SHOW_ALERT,
  payload: alertData
});

export const countriesHideAlert = () => ({
  type: COUNTRIES_HIDE_ALERT,
});

export const getCountries = () => async (dispatch) => {
  dispatch(countriesBegin());

  try {
    const result = await axios.get('https://api.covid19api.com/countries');

    if (result) {
      dispatch(countriesEnd());
      dispatch(countriesSuccess(result.data));
    } else {
      dispatch(countriesEnd());
      dispatch(countriesShowAlert({ message: 'An error occured while fetching countries.', type: 'error' }));
    }
  } catch (err) {
    dispatch(countriesEnd());
    dispatch(countriesShowAlert({ message: err, type: 'error' }));
  }
}