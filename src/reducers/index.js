import { combineReducers } from "redux";
import HackathonReducer from "./reducer-hackathon-list";
import HackathonDetailReducer from "./reducer-hackathon-details";

const rootReducer = combineReducers({
  hackathons: HackathonReducer,
  hackathonDetail: HackathonDetailReducer
});

export default rootReducer;
