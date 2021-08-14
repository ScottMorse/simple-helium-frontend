import { createAction } from "@reduxjs/toolkit"
import { Effect } from "redux-saga/effects"

export const registerSaga = (action: ReturnType<typeof createAction>, strategy: (...args: any) => Effect, sagas: Effect[]) => {
  return function decorated(target: (payload: any) => void){
    sagas.push(strategy(action.type, target))
  }
}