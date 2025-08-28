// import './App.css'
import { useState } from 'react'

function UsingObject() {
//   const [count, setCount] = useState({
//     count:0,
//     clicks:0
//   })

const [allValues,setAllValues] = useState({
    firstname:'mohd',
    lastname:'shahid',
    age:25
  })

  return (
    <>
      {/* <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
        <div className="bg-white shadow-2xl rounded-2xl p-8 text-center w-100">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">Count is : {count.count} and Clicks are : {count.clicks}</h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCount({...count,count:count.count + 1,clicks:count.clicks + 1})}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md transition"
            >
              Increment
            </button>
            <button
              onClick={() => { if(count.count>0) setCount({...count,count:count.count - 1,clicks:count.clicks + 1}) }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md transition"
            >
              Decrement
            </button>
          </div>
        </div>
      </div> */}
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
        <div className="bg-white shadow-2xl rounded-2xl p-8 text-center w-100">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">FirstName : {allValues.firstname} and LastName : {allValues.lastname} and Age : {allValues.age}</h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setAllValues({...allValues,firstname:'mahesh',lastname:'kumar',age:30})}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md transition"
            >
              Update
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default UsingObject
