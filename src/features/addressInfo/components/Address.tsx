
import { isFetched } from 'lib/utils/dataStates'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelectorTyped } from 'store'
import { addressInfoSagaActions } from '../saga'
import { AddressAccount } from './AddressAccount'

export const Address = () => {
  const dispatch = useDispatch()
  const account = useSelectorTyped(({ addressInfo: { account } }) => account)

  useEffect(() => {
    dispatch(addressInfoSagaActions.FETCH_ADDRESS_INFO({ address: '12345' }))
  }, [])

  return isFetched(account) ? <AddressAccount account={account}/> : <div>Loading</div>
}