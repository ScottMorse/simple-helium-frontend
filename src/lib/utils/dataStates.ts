
export const NOT_YET_FETCHED = 'NOT_YET_FETCHED' as const
export const FAILED_TO_FETCH = 'FAILED_TO_FETCH' as const

export type FetchedData<T> = T | typeof NOT_YET_FETCHED | typeof FAILED_TO_FETCH

export const isFetched = <DataType>(data: FetchedData<DataType>): data is DataType => {
  return data !== NOT_YET_FETCHED && data !== FAILED_TO_FETCH
}