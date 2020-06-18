import { IApplicationState } from "../../redux/rootReducer";
export const userSelectors = {
  getUsers: (state: IApplicationState) => state.users
};
