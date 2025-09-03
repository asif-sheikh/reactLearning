import axios from "axios"
import { useEffect, useState } from "react"

function AxiosDelete() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Fetch posts initially
  useEffect(() => {
    setLoading(true)
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5") // sirf 5 posts
      .then((res) => {
        setPosts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Delete handler
  const handleDelete = async (id: number) => {
    console.log(id);
    
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      // local state se remove kar do
      setPosts((prev) => prev.filter((post) => post.id !== id))
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-6">Delete Post Example</h1>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="w-full max-w-2xl space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.body}</p>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AxiosDelete
