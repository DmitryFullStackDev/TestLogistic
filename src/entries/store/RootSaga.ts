import { all, fork } from 'redux-saga/effects'
import { watchPlaceSaga } from '../location/sagas'
import { watchDistanceSaga } from '../distance/sagas'

export default function* RootSaga() {
  yield all([fork(watchPlaceSaga)])
  yield all([fork(watchDistanceSaga)])
}
