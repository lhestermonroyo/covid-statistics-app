import { combineReducers } from 'redux';
import overviewReducer from './overviewReducer';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  overview: overviewReducer,
  countries: countriesReducer,
});

export default rootReducer;