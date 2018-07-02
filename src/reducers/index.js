import { combineReducers } from "redux";
import HackathonReducer from "./reducer-hackathon-list";

const rootReducer = combineReducers({
  hackathons: HackathonReducer
});

export default rootReducer;
