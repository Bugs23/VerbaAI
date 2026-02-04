import { useTheme } from "../context/ThemeContext"

export default function ThemeSwitch() {

  const { theme, toggleTheme } = useTheme()

  return (
    <label htmlFor="theme-toggle" className="inline-flex items-center cursor-pointer select-none gap-3 mt-4">
      <input
        id="theme-toggle"
        type="checkbox"
        aria-label="theme"
        onChange={toggleTheme}
        checked={theme === "dark"}
        className="sr-only"
      />
      {/* Track */}
      <div
        className="flex items-center w-12 h-6 bg-gray-300 dark:bg-gray-900 rounded-full transition-color"
      >
        {/* Knob */}
        <div
          className={` top-1 left-1 h-4 w-4 bg-white dark:bg-gray-100 rounded-full shadow-md transition-transform duration-300 ${theme === "dark" ? "translate-x-7" : "translate-x-1"}`}
        />
      </div>

      {/* Label */}
      <span className="text-sm font-semibold text-white dark:text-gray-100">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </span>
    </label>
  )
}