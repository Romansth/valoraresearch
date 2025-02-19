import { FileWarning, HomeIcon, LineChart } from "lucide-react"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="mb-6 flex justify-center">
          <FileWarning className="h-24 w-24 text-red-400" />
        </div>
        <h1 className="mb-2 flex items-center justify-center gap-2 text-6xl font-bold text-gray-800">
          4
          <LineChart className="h-12 w-12 -rotate-45 text-red-400" />4
        </h1>
        <p className="mb-6 text-xl font-medium text-gray-600">
          Looks like this investment didn&apos;t yield any returns
        </p>
        <p className="mb-8 text-gray-500">
          The page you&apos;re looking for seems to have been liquidated from
          our records
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          <HomeIcon className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
