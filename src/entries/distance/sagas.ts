import { all, call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './slices'
import * as actionsLocation from '../location/slices'

import { API } from '../../shared'

function* getDistance(action: ReturnType<typeof actions.getDistance>) {
  const { payload } = action

  try {
    yield put(actions.setIsLoading(true))

    const {
      data: { result },
    } = yield call(() => API.calcDistance(payload))

    yield put(actions.setDate(result))

    yield put(actions.setIsSuccess(true))
  } catch (e) {
    const idArr = e.data.data.data.map(item => item[1])

    yield all(
      idArr.map(item =>
        put(actionsLocation.setErrorPlaceSearch({ id: item, data: true })),
      ),
    )

    yield put(actions.setIsSuccess(false))
  } finally {
    yield put(actions.setIsLoading(false))
  }
}

export function* watchDistanceSaga() {
  yield takeEvery(actions.getDistance.type, getDistance)
}
