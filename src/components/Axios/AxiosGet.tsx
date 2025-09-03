import axios from 'axios'
import { useEffect, useState } from 'react'

function AxiosGet() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.error || error.message)
        } else {
          setError('Something went wrong')
        }
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Axios Learning</h1>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500 font-semibold">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {data &&
          data.map((item: any) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-200"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.body}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default AxiosGet
