import { createAction } from "@reduxjs/toolkit"
import { Effect } from "redux-saga/effects"

export const registerSaga = (action: ReturnType<typeof createAction>, strategy: (...args: any) => Effect) => {
  return function decorated(target: (payload: any) => void){
    return strategy(action.type, target)
  }
}