
import { configureStore, combineReducers, Store } from "@reduxjs/toolkit"
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { rootSaga } from './rootSaga'
import { rootReducer } from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  devTools: ENV.nodeEnv !== 'production',
  middleware: ENV.nodeEnv === 'production' ? [sagaMiddleware] : [createLogger(), sagaMiddleware]
})

export type StoreState = ReturnType<typeof rootReducer>

export const useSelectorTyped = useSelector as TypedUseSelectorHook<StoreState>

sagaMiddleware.run(rootSaga)