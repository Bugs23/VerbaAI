import "./Header.css"
import logo from "/verbaai-logo.svg"

export default function Header() {
  return (
    <header className="header flex flex-col items-center pt-6">
      <img src={logo} className="header_logo w-[300px]" />
      <p className="header_tagline text-xl">Translate. Learn. Connect.</p>
    </header>
  )
}