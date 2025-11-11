export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <section className="flex flex-col w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-6">
        <div className="flex flex-col space-y-6">
          <select id="language-select" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
          </select>

          <textarea
            id="source-text"
            placeholder="Enter text to translate..."
            className="border border-gray-300 rounded-md p-3 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
          >
          </textarea>
          <button id="translate-btn" className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md py-2">Translate</button>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-gray-600">
          <p id="translated-text">Your translation will appear here... </p>
        </div>
      </section>
    </main>
  )
}