export default function Footer() {
  return (
    <footer aria-label="copyright" className="text-center pt-6 pb-10 bg-w text-gray-500 text-sms bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
      &copy; {new Date().getFullYear()} VerbaAI. All rights reserved.
    </footer>
  )
}