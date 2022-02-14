import { put, takeLatest, call } from "redux-saga/effects";
import { fetchLogin } from "../services/auth/auth.service";

function* loginAsync(action) {
  const user = yield call(fetchLogin, action.payload);
  if (user.token) {
    yield put({ type: "STARTSESION_ASYNC", user: user });
  }
}

export function* watchLogin() {
  yield takeLatest("STARTSESION", loginAsync);
}
