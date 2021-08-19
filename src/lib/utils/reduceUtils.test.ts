import { sum } from "./reduceUtils"

describe('Test reduceUtils', () => {
  test('sum', () => {
    expect(sum([1,2,3,4,5], 0)).toBe(15)
    expect(sum([1,2,3,4,5], 5)).toBe(20)
    expect(sum([], 0)).toBe(0)
    expect(sum([],20)).toBe(20)
    expect(sum(['1','2','3','4','5'], '')).toBe('12345')
    expect(sum([], '')).toBe('')
    expect(sum([], 'What hath God wrought?')).toBe('What hath God wrought?')
  })
})