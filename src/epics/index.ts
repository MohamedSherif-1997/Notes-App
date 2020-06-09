import { combineEpics } from "redux-observable";
import LoginEpic from "./loginEpics";

export default combineEpics(LoginEpic);
