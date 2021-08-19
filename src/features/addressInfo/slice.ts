
import { Account } from '@helium/http'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchedData, DataStateEum } from 'lib/fetchedData/dataStates'

export interface AddressInfoState {
  address: string,
  account: FetchedData<Account>,
}

const initialState: AddressInfoState = {
  address: '',
  account: DataStateEum.PENDING
}

export const addressInfoSlice = createSlice({
  name: 'addressInfo',
  initialState,
  reducers: {
    setAddress: (state, { payload }: PayloadAction<{ address: string }>) => {
      state.address = payload.address
    },
    fetchAccount: (state) => {
      state.account = DataStateEum.BUSY
    },
    getAccount: (state, { payload }: PayloadAction<{ account: Account }>) => {
      state.account = payload.account
    },
  }
})