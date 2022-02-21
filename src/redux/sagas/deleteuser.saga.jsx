import { put, takeLatest, call } from "redux-saga/effects";
import { deleteUser } from "../../services/users/users.service";

function* deleteAsync(action) {
  const user = yield call(deleteUser, action.payload);
  if (user===204) {
    yield put({ type: "DELETEUSER_ASYNC", payload: user });
  }
}

export function* watchDelete() {
  yield takeLatest("DELETEUSER", deleteAsync);
}
