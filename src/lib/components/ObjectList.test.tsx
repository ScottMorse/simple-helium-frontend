
import { render, screen } from '@testing-library/react'
import { ObjectList } from './ObjectList'

describe("Test ObjectList", () => {
  test('It renders object attributes', () => {
    render(<ObjectList object={{
        'A': 'hey',
        'B': 'bee-hee',
        'C': 'cee-hee'
      }}
      keys={['A','C']}
    />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('A: hey')
    expect(screen.getAllByRole('listitem')[1]).toHaveTextContent('C: cee-hee')
  })
})