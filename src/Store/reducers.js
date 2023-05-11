import { combineReducers } from 'redux';
import dashboardReducer from '../pages/Home/Store/reducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

export default rootReducer;