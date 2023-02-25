import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import saga from 'redux-saga'
import RootReducer from './RootReducer'
import RootSaga from './RootSaga'

const sagaMiddleware = saga()

export const store = configureStore({
  reducer: RootReducer,
  middleware: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(RootSaga)
