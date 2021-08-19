
import { Account } from '@helium/http'
import { ObjectList } from 'lib/components/ObjectList'

export const AddressAccount = ({ account }: { account: Account }) => {
  return (
    <div>
      <h1>Account</h1>
      <ObjectList
        object={account}
        keys={['address', 'balance', 'rewards']}
      />
    </div>
  )
}