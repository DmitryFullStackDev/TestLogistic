import {
  combineReducers,
  createAction,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

export const getPlaceSearch = createAction<string>('getPlaceSearch')

const display = createSlice({
  name: 'display',
  initialState: '',
  reducers: {
    setDisplay: (state, { payload }) => payload,
  },
})

const placeSearch = createSlice({
  name: 'placeSearch',
  initialState: [],
  reducers: {
    setPlaceSearch: (state, { payload }: PayloadAction<any>) => payload,
  },
})

const isPredictionsLoaded = createSlice({
  name: 'isPredictionsLoaded',
  initialState: false as boolean,
  reducers: {
    setIsPredictionsLoaded: (state, { payload }: PayloadAction<boolean>) =>
      payload,
  },
})

const errorPlaceSearch = createSlice({
  name: 'errorPlaceSearch',
  initialState: false,
  reducers: {
    setErrorPlaceSearch: (state, { payload }: PayloadAction<boolean>) =>
      payload,
  },
})

export const { setPlaceSearch } = placeSearch.actions
export const { setErrorPlaceSearch } = errorPlaceSearch.actions
export const { setDisplay } = display.actions
export const { setIsPredictionsLoaded } = isPredictionsLoaded.actions

export default combineReducers({
  display: display.reducer,
  errorPlaceSearch: errorPlaceSearch.reducer,
  placeSearch: placeSearch.reducer,
  isPredictionsLoaded: isPredictionsLoaded.reducer,
})
