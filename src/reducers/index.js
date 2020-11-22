import { combineReducers } from 'redux';
import overviewReducer from './overviewReducer';

const rootReducer = combineReducers({
  overview: overviewReducer
});

export default rootReducer;