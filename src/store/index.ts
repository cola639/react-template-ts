import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { errorLoggingMiddleware } from './midwares/errorLogging.middleware'
import rootReducer from './slices'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorLoggingMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
