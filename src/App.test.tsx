import { render, screen } from "@testing-library/react"
import App from "./App"

it("renders the main UI", () => {
  render(<App />)
  expect(screen.getByRole("button", { name: /translate/i })).toBeInTheDocument()
})