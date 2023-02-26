import { takeEvery } from 'redux-saga/effects'
import * as actions from './slices'

function* getDistance() {
  /* try {
    yield put(actions.setIsLoading({ data: true, id }))

    const {
      data: { result },
    } = yield call(() => API.getListOfCities(data))
  } catch (e) {
    yield put(actions.setErrorPlaceSearch({ data: true, id }))
  } finally {
    yield put(actions.setIsLoading({ data: false, id }))
  }*/
}

export function* watchDistanceSaga() {
  yield takeEvery(actions.getDistance.type, getDistance)
}
