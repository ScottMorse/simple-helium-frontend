
export enum DataStateEum {
  PENDING = 'APP_DATA_STATE_PENDING',
  BUSY = 'APP_DATA_STATE_BUYS',
  ERROR = 'APP_DATA_STATE_ERROR'
}

export type FetchedData<T> = T | DataStateEum

export const isFetched = <DataType>(data: FetchedData<DataType>): data is DataType => {
  return !Object.values(DataStateEum).includes(data as DataStateEum)
}
