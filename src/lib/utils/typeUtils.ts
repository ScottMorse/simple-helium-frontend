
export type DTO<T> = 
Pick<T, { [K in keyof T]: T[K] extends (...args: any) => any ? never : K }[keyof T]>;

export const isString = (s: unknown): s is string => typeof s === "string"
export const isBoolean = (s: unknown): s is boolean => typeof s === "boolean"
export const isNumber = (s: unknown): s is number => typeof s === "number"