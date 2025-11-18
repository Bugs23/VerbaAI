export default function Footer() {
  return (
    <footer aria-label="copyright" className="text-center pt-6 bg-w text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} VerbaAI. All rights reserved.
    </footer>
  )
}