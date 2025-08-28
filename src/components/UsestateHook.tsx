// import './App.css'
import { useState } from 'react'

function UsestateHook() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
        <div className="bg-white shadow-2xl rounded-2xl p-8 text-center w-80">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">{`Count is : ${count}`}</h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md transition"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md transition"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
  

    </>
  )
}

export default UsestateHook
