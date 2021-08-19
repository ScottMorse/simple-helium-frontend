import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { useUuid } from "./useUuid"

const TestComponent = ({ testId }: { testId: string }) => {
  const id = useUuid()
  const [state, setState] = useState(false)

  return (
    <button onClick={() => setState(!state)}>{state} <span data-testid={testId}>{id}</span></button>
  )
}

describe("Test useUuid", () => {
  test("A component's id persists", () => {
    const { rerender } = render(<TestComponent testId="A"/>)
    const initialId = screen.getByTestId("A").textContent as string
    expect(typeof initialId).toBe('string')

    userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId("A")).toHaveTextContent(initialId)

    userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId("A")).toHaveTextContent(initialId)

    rerender(<TestComponent testId="B"/>)
    expect(screen.getByTestId("B")).toHaveTextContent(initialId)
  })
  
  test("Components have unique ids", () => {
    render(<TestComponent testId="A"/>)
    const idA = screen.getByTestId("A").textContent

    render(<TestComponent testId="B"/>)
    const idB = screen.getByTestId("B").textContent

    expect(idA).not.toEqual(idB)
  })
})

