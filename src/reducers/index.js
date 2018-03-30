import { combineReducers } from 'redux';
import VisitsListReducer from './VisitsListReducer';

export default combineReducers({
    Visits: VisitsListReducer
});