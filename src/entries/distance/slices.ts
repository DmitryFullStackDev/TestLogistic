import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const getDistance = createAction<any>('getDistance')

export const distance = createSlice({
  name: 'distance',
  initialState: { isLoading: false, date: [], isSuccess: false },
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setDate: (state, { payload }: PayloadAction<any>) => {
      state.date = payload
    },
    setIsSuccess: (state, { payload }: PayloadAction<boolean>) => {
      state.isSuccess = payload
    },
  },
})

export const { setDate, setIsSuccess, setIsLoading } = distance.actions
