import { createAction } from '@reduxjs/toolkit'
import { takeLatest, put, delay, all, Effect, call } from 'redux-saga/effects'
import { HeliumClient } from 'lib/helium'

import { addressInfoSlice } from './slice'
import { registerSaga } from 'lib/utils/registerSaga'

export interface FetchAddressPayload {
  address: string
}

export const addressInfoSagaActions = {
  FETCH_ADDRESS_INFO: createAction<FetchAddressPayload>('FETCH_ADDRESS_INFO'),
}

function* fetchAddressInfoSaga(payload: FetchAddressPayload): any {
  try {
    const account = yield call(() => {
      return HeliumClient.accounts.get(payload.address)
    })
    yield put(addressInfoSlice.actions.getAccount({ account }))
  } catch(e){
    console.error(e)
  }
}

export function* addressInfoSaga(){
  yield all([
    registerSaga(addressInfoSagaActions.FETCH_ADDRESS_INFO, takeLatest)(fetchAddressInfoSaga)
  ])
}
