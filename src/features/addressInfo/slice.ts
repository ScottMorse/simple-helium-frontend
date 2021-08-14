
import { Account } from '@helium/http'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchedData, NOT_YET_FETCHED } from 'lib/utils/dataStates'
import { FetchAddressPayload } from './saga'

export interface AddressInfoState {
  address: string,
  account: FetchedData<Account>,
}

const initialState: AddressInfoState = {
  address: '',
  account: NOT_YET_FETCHED
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