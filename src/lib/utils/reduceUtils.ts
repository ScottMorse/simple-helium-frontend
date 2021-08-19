
export function sum(arr: number[], initial: number): number
export function sum(arr: string[], initial: string): string
export function sum(arr: any[], initial: any){ 
  return arr.reduce((final, s) => final + s, initial) 
}