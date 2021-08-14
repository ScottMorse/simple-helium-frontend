
import { addressInfoSlice } from 'features/addressInfo/slice'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  [addressInfoSlice.name]: addressInfoSlice.reducer
})
