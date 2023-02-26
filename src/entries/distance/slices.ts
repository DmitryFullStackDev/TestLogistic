import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const getDistance = createAction<any>('getDistance')

export const distance = createSlice({
  name: 'distance',
  initialState: { isLoading: false, date: {}, isResult: false },
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setDate: (state, { payload }: PayloadAction<any>) => {
      state.date = payload
    },
    setIsResult: (state, { payload }: PayloadAction<boolean>) => {
      state.isResult = payload
    },
  },
})

export const { setDate, setIsResult, setIsLoading } = distance.actions
