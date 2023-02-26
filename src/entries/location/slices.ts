import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetPlaceSearchType, PlacePayloadType } from '../../shared'

export const getPlaceSearch = createAction<GetPlaceSearchType>('getPlaceSearch')

export const place = createSlice({
  name: 'place',
  initialState: [
    {
      id: 1,
      placeSearch: [],
      isLoading: false,
      isPredictionsLoaded: false,
      errorPlaceSearch: false,
    },
    {
      id: 2,
      placeSearch: [],
      isLoading: false,
      isPredictionsLoaded: false,
      errorPlaceSearch: false,
    },
  ],
  reducers: {
    setIsLoading: (state, { payload }) => {
      const { id, data } = payload
      return state.map(item => {
        if (item.id === id) {
          return { ...item, isLoading: data }
        }
        return item
      })
    },
    setPlaceSearch: (
      state,
      { payload }: PayloadAction<PlacePayloadType<string[]>>,
    ) => {
      const { id, data } = payload

      return state.map(item => {
        if (item.id === id) {
          return { ...item, placeSearch: data }
        }
        return item
      })
    },
    setIsPredictionsLoaded: (
      state,
      { payload }: PayloadAction<PlacePayloadType<boolean>>,
    ) => {
      const { id, data } = payload

      return state.map(item => {
        if (item.id === id) {
          return { ...item, isPredictionsLoaded: data }
        }
        return item
      })
    },
    setErrorPlaceSearch: (
      state,
      { payload }: PayloadAction<PlacePayloadType<boolean>>,
    ) => {
      const { id, data } = payload

      return state.map(item => {
        if (item.id === id) {
          return { ...item, errorPlaceSearch: data }
        }
        return item
      })
    },
    addEntity: (state, { payload }: PayloadAction<number>) => {
      const isEntity = state.find(item => item.id === payload)

      if (!isEntity) {
        state.push({
          id: payload,
          placeSearch: [],
          isPredictionsLoaded: false,
          errorPlaceSearch: false,
          isLoading: false,
        })
      }
    },
    deleteEntity: (state, { payload }: PayloadAction<number>) =>
      state.filter(item => item.id !== payload),
  },
})

export const {
  setPlaceSearch,
  setErrorPlaceSearch,
  setIsPredictionsLoaded,
  addEntity,
  setIsLoading,
  deleteEntity,
} = place.actions
