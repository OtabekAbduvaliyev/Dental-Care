import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h2 className="text-6xl font-bold text-gray-800 mb-4">404</h2>
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <Link 
          href="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
