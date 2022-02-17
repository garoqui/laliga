import { put, takeLatest, call } from "redux-saga/effects";
import { editUser } from "../../services/users/users.service";

function* editAsync(action) {
  const user = yield call(editUser, action.payload);
  if (user.ok) {
    yield put({ type: "EDITUSER_ASYNC", user: user });
  }
}

export function* watchEdit() {
  yield takeLatest("EDITUSER", editAsync);
}
