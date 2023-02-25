import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './slices'
import { API } from '../../shared'

function* getPlaceSearch(action: ReturnType<typeof actions.getPlaceSearch>) {
  const { payload } = action
  yield put(actions.setIsPredictionsLoaded(false))
  yield put(actions.setErrorPlaceSearch(false))

  try {
    const {
      data: { result },
    } = yield call(() => API.getListOfCities(payload))

    yield put(actions.setPlaceSearch(result))
    yield put(actions.setIsPredictionsLoaded(true))
  } catch (e) {
    yield put(actions.setIsPredictionsLoaded(false))
    yield put(actions.setErrorPlaceSearch(true))
  }
}

export function* watchPlaceSaga() {
  yield takeLatest(actions.getPlaceSearch.type, getPlaceSearch)
}
