import { watchLogin } from './auth.saga'
import { watchEdit } from './edituser.saga'
import { watchDelete } from './deleteuser.saga'
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
    yield fork(watchLogin)
    yield fork(watchEdit)
    yield fork(watchDelete)   
  }
  