
import { Account } from '@helium/http'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchAddressPayload } from './saga'

export const ACCOUNT_NOT_FETCHED = 'ACCOUNT_NOT_FETCHED' as const

export interface AddressInfoState {
  address: string,
  account: Account | typeof ACCOUNT_NOT_FETCHED,
}

const initialState: AddressInfoState = {
  address: '',
  account: ACCOUNT_NOT_FETCHED
}

export const addressInfoSlice = createSlice({
  name: 'addressInfo',
  initialState,
  reducers: {
    setAddress: (state, { payload }: PayloadAction<{ address: string }>) => {
      state.address = payload.address
    },
    getAccount: (state, { payload }: PayloadAction<{ account: Account }>) => {
      state.account = payload.account
    },
    // getAddressInfo: (state: { payload }: PayloadAction<{ }>){

    // }
  }
})