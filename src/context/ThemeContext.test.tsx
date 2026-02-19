import { render, waitFor } from "@testing-library/react"
import { ThemeProvider } from "./ThemeContext"

it("defaults to light on first render", async () => {
  // ARRANGE: nothing to set up, provider should default to light

  // ACT: render the provider
  render(
    <ThemeProvider>
      <div />
    </ThemeProvider>
  )

  // ASSERT: provider syncs the theme to the DOM
  await waitFor(() => {
    expect(document.documentElement.dataset.theme).toBe("light")
  })
})

it("loads the theme from local storage on mount", async () => {
  // ARRANGE: simulate a returning user who saved dark mode
  localStorage.setItem("theme", "dark")

  // ACT: render the provider so it can read localStorage
  render(
    <ThemeProvider>
      <div />
    </ThemeProvider>
  )

  // ASSERT: provider applies the stored theme to the DOM
  await waitFor(() => {
    expect(document.documentElement.dataset.theme).toBe("dark")
  })
})