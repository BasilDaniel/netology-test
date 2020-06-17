import { Reducer } from "redux";
import { IUserState } from "../../models/user";
import {
  GET_USERS_COLLECTION,
  GET_USERS_COLLECTION_SUCCESS
} from "../../redux/user/user.actions";

const initialState = {
  collection: null,
  loading: false
};
export const userReducer: Reducer<IUserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_USERS_COLLECTION:
      return {
        ...state,
        collection: null,
        loading: true
      };
    case GET_USERS_COLLECTION_SUCCESS:
      return { ...state, collection: action.payload, loading: false };

    default:
      return state;
  }
};
