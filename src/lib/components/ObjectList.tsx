import { useUuid } from "lib/hooks/useUuid"
import { capitalize } from "lib/utils/stringUtils"
import { ComponentProps } from "react"

interface ObjectListProps<T extends unknown> extends ComponentProps<'ul'> {
  object: T,
  keys: Array<keyof T>,
}

export const ObjectList = <T extends unknown>({
  object,
  keys
}: ObjectListProps<T>) => {

  const id = useUuid()

  return (
    <ul>
      {keys.map((key) => (
        <li key={`${id}-${key}`}>
          {capitalize(key + '')}: {object[key] + ''}
        </li>
      ))}
    </ul>
  )
}