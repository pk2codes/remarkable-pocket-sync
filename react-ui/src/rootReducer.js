import combineReducers from "redux/src/combineReducers";
import pocketListReducer from './pocketlist/reducer';
export default combineReducers({
   pocketlist: pocketListReducer
});