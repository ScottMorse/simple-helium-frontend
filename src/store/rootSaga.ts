
import { all } from 'redux-saga/effects'

import { addressInfoSaga } from 'features/addressInfo/saga'

export function* rootSaga(){
  yield all([
    addressInfoSaga()
  ])
}