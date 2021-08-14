
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelectorTyped } from 'store'
import { addressInfoSagaActions } from '../saga'
import { ACCOUNT_NOT_FETCHED } from '../slice'
import { AddressAccount } from './AddressAccount'

export const Address = () => {
  const dispatch = useDispatch()
  const account = useSelectorTyped(({ addressInfo: { account } }) => account)

  useEffect(() => {
    dispatch(addressInfoSagaActions.FETCH_ADDRESS_INFO({ address: '12345' }))
  }, [])

  return account === ACCOUNT_NOT_FETCHED ? <div>Loading</div> : <AddressAccount account={account} />
}