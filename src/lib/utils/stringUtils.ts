import { sum } from "./reduceUtils"

export const capitalize = (s: string, { forceLower = true, allWords = false }: {
 forceLower?: boolean,
 allWords?: boolean,
} = { forceLower: true, allWords: false }): string => {
  if(allWords){
    return sum(s.split(/\s+/).map((word) => capitalize(word, { forceLower }) + ' '), '').trim()
  }
  const a = s.slice(0,1).toLocaleUpperCase() 
  const b = s.slice(1)
  return a + (forceLower ? b.toLocaleLowerCase() : b)
}