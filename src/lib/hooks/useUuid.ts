
import { useRef } from 'react'
import { v4 } from 'uuid'

export const useUuid = () => {
  const { current: id } = useRef(v4())

  return id
}