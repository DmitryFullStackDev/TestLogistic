import { createSlice } from '@reduxjs/toolkit'

export const counter = createSlice({
  name: 'counter',
  initialState: { isError: false },
  reducers: {
    setCountError: (state, { payload }) => {
      state.isError = payload
    },
  },
})

export const { setCountError } = counter.actions
