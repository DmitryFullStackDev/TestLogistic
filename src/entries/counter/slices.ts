import { createSlice } from '@reduxjs/toolkit'

export const counter = createSlice({
  name: 'counter',
  initialState: { isError: false, count: 0 },
  reducers: {
    setCountError: (state, { payload }) => {
      state.isError = payload
    },
    setCount: (state, { payload }) => {
      state.count = payload
    },
  },
})

export const { setCountError, setCount } = counter.actions
