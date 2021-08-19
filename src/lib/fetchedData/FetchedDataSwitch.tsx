import { ComponentType } from "react"
import { ReactElement } from "react"
import { DataStateEum, FetchedData, isFetched } from "./dataStates"

interface FetchedDataSwitchProps<T extends unknown> {
  data: FetchedData<T>,
  Complete: ComponentType,
  Pending?: ComponentType,
  Busy?: ComponentType,
  Error?: ComponentType,
}

const Default = () => null;

export const FetchedDataSwitch = <T extends unknown>({ 
  data,
  Complete,
  Pending = Default,
  Busy = Default,
  Error = Default,
}: FetchedDataSwitchProps<T>) => {

  if(isFetched(data)){
    return <Complete />
  }

  switch(data){
    case DataStateEum.PENDING:
      return <Pending/>
    case DataStateEum.BUSY:
      return <Busy/>
    case DataStateEum.ERROR:
      return <Error/>
    default:
      return <Default/>
  }
}