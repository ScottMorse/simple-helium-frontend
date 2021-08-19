
import { Account } from '@helium/http'
import { isFetched } from 'lib/fetchedData/dataStates'
import { FetchedDataSwitch } from 'lib/fetchedData/FetchedDataSwitch'
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

  return (
    <FetchedDataSwitch
      data={account}
      Complete={() => <AddressAccount account={account as Account} />}
      Busy={() => <div>Account loading</div>}
      Pending={() => <div>Account not loaded</div>}
      Error={() => <div>Error fetching Account</div>}
    />
  )
}