import { it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Main from "./Main"

it("updates source text when the user types", async () => {
  /* Arrange */
  const user = userEvent.setup()
  render(<Main />)
  const textbox = screen.getByRole("textbox")

  /* Act */
  await user.type(textbox, "Test input")

  /* Assert */
  expect(textbox).toHaveValue("Test input")
})

it("checks if the textbox clears when the user clicks the reset button", async () => {
  /* Arrange */
  const user = userEvent.setup()
  render(<Main />)
  const resetButton = screen.getByRole("button", { name: /Reset/i })
  const textbox = screen.getByRole("textbox")

  /* Act */
  await user.type(textbox, "Test input")

  /* Assert */
  expect(textbox).toHaveValue("Test input")

  /* Act */
  await user.click(resetButton)

  /* Assert */
  expect(textbox).toHaveValue("")

})