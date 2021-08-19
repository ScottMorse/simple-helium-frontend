import { capitalize } from "./stringUtils"

describe('Test string utils', () => {
  test('Test capitalize', () => {
    expect(capitalize('scott')).toBe('Scott')
    expect(capitalize('SCOTT')).toBe('Scott')
    expect(capitalize('sCOTT')).toBe('Scott')
    expect(capitalize('scott', { forceLower: false })).toBe('Scott')
    expect(capitalize('JOHN', { forceLower: false })).toBe('JOHN')
    expect(capitalize('sCOTT', { forceLower: false })).toBe('SCOTT')
    expect(capitalize('1234')).toBe('1234')
    expect(capitalize('1234', { forceLower: false })).toBe('1234')
    expect(capitalize('Scott Morse', { allWords: true })).toBe('Scott Morse')
    expect(capitalize('scott morse', { allWords: true })).toBe('Scott Morse')
    expect(capitalize('sCOTT mORSE', { allWords: true })).toBe('Scott Morse')
    expect(capitalize('sCOTT mORSE', { allWords: true, forceLower: false })).toBe('SCOTT MORSE')
    expect(capitalize('john quincy adams', { allWords: true, forceLower: false })).toBe('John Quincy Adams')
  })
})