import { useContext, createContext, useState, useEffect } from "react"
import type { ReactNode } from "react"

export type theme = "light" | "dark"

export type ThemeContextType = {
  theme: theme,
  setTheme: (theme: theme) => void
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<theme>("light")

  // Check for saved theme in localStorage
  useEffect(() => {

    // Get theme from localStorage
    const savedTheme = localStorage.getItem("theme") as theme | null

    // Set the theme if it exists
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme)
      return
    }
  }, [])

  // Keep DOM and localStorage in sync wheneever the theme changes
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    )
  }

  // Context value
  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use the ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme has to be used within a ThemeProvider")
  }

  return context
}