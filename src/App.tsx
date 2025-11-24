import './App.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
