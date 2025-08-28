// import './App.css'
import { useState } from 'react'

function UsingArray() {
  const [allItems, setAllItems] = useState([
    {
      firstname: 'mohd',
      lastname: 'shahid',
      age: 25
    },
    {
      firstname: 'asif',
      lastname: 'khan',
      age: 30
    }
  ])

  function handleArray() {
    setAllItems((prev) =>
      prev.map((item, index) =>
        index === 0
          ? { ...item, firstname: 'UpdatedName', lastname: 'UpdatedLastName', age: item.age + 1 }
          : item
      )
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 text-center w-96">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">All Items</h1>

        {/* ✅ Array ke saare items display */}
        <div className="space-y-4">
          {allItems.map((person, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center"
            >
              <span>
                {person.firstname} {person.lastname} — Age: {person.age}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleArray}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md transition"
          >
            Update First Person
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsingArray
