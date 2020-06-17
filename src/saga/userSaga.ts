import { call, put, takeEvery } from "redux-saga/effects";
import userApi from "../api/user.api";
import handleError from "../common/helpers/error-helper";
import { IUsersCollection } from "../models/user";
import { GET_USERS_COLLECTION, UserActions } from "../redux/user/user.actions";

export function* getUsersWatcher() {
  yield takeEvery(GET_USERS_COLLECTION, getUsersSaga);
}
function* getUsersSaga() {
  try {
    const users: IUsersCollection = yield call(userApi.getUsers);
    yield put(UserActions.getUsersSuccess(users));
  } catch (e) {
    yield handleError(e);
  }
}

const userSaga = [getUsersWatcher()];

export default userSaga;
