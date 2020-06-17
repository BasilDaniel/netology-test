import { combineReducers } from "redux";
import { IUserState } from "../models/user";
import { userReducer } from "../redux/user/user.reducer";

export type RootState = ReturnType<typeof rootReducer>;

export interface IApplicationState {
  users: IUserState;
}

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
