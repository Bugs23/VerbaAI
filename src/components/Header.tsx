import logo from "/verbaai-logo.svg"

export default function Header() {
  return (
    <header className="header flex flex-col items-center py-6 bg-blue-600">
      <div className="flex justify-center gap-4 text-white">
        <img src={logo} className="header_logo w-[82px]" />
        <h1 className="text-[52px] font-semibold tracking-wider">VerbaAI</h1>
      </div>
      <p className="header_tagline text-xl text-white">Translate. Learn. Connect.</p>
    </header>
  )
}