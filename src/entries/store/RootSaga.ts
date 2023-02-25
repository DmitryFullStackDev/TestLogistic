import { all, fork } from 'redux-saga/effects'
import { watchPlaceSaga } from '../location/sagas'

export default function* RootSaga() {
  yield all([fork(watchPlaceSaga)])
}
