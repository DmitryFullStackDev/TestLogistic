import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const getPlaceSearch = createAction<string>('getPlaceSearch')

export const place = createSlice({
  name: 'display',
  initialState: {
    id: '',
    display: '',
    placeSearch: [],
    isPredictionsLoaded: false,
    errorPlaceSearch: false,
  },
  reducers: {
    setDisplay: (state, { payload }) => {
      state.display = payload
    },
    setPlaceSearch: (state, { payload }: PayloadAction<any>) => {
      state.placeSearch = payload
    },
    setIsPredictionsLoaded: (state, { payload }: PayloadAction<boolean>) => {
      state.isPredictionsLoaded = payload
    },
    setErrorPlaceSearch: (state, { payload }: PayloadAction<boolean>) => {
      state.errorPlaceSearch = payload
    },
  },
})

export const {
  setDisplay,
  setPlaceSearch,
  setErrorPlaceSearch,
  setIsPredictionsLoaded,
} = place.actions
