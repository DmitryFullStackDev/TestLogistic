import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './slices'
import { API } from '../../shared'

function* getPlaceSearch(action: ReturnType<typeof actions.getPlaceSearch>) {
  const {
    payload: { data, id },
  } = action
  yield put(actions.setIsPredictionsLoaded({ data: false, id }))
  yield put(actions.setErrorPlaceSearch({ data: false, id }))
  yield put(actions.setIsLoading({ data: true, id }))

  try {
    const {
      data: { result },
    } = yield call(() => API.getListOfCities(data))

    yield put(actions.setPlaceSearch({ data: result, id }))
    yield put(actions.setIsPredictionsLoaded({ data: true, id }))
  } catch (e) {
    yield put(actions.setIsPredictionsLoaded({ data: false, id }))
    yield put(actions.setErrorPlaceSearch({ data: true, id }))
  } finally {
    yield put(actions.setIsLoading({ data: false, id }))
  }
}

export function* watchPlaceSaga() {
  yield takeEvery(actions.getPlaceSearch.type, getPlaceSearch)
}
