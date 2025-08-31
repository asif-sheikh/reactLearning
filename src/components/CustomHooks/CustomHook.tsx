import useAdditionApp from './useAdditionApp'
import useCounterApp from './useCounterApp'

function CustomHook() {
  const {add, handleAddition, handleSubtraction,handleDivision,handleMultiplication} = useAdditionApp()
  const {count, handleIncrement, handleDecrement} = useCounterApp()

  return (
    <div>
      <h1>Value: {add}</h1>
      <button onClick={handleAddition} className='w-30 p-3 border rounded-lg focus:outline-none focus:ring-2 bg-green-200'>Add</button>
      <button onClick={handleSubtraction} className='w-30 p-3 border rounded-lg focus:outline-none focus:ring-2 bg-green-200'>Subtract</button>
      
      <button onClick={handleDivision} className='w-30 p-3 border rounded-lg focus:outline-none focus:ring-2 bg-green-200'>Divide</button>
      <button onClick={handleMultiplication} className='w-30 p-3 border rounded-lg focus:outline-none focus:ring-2 bg-green-200'>Multiply</button>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement} className='w-30 p-3 border rounded-lg focus:outline-none focus:ring-2 bg-green-200'>Increment</button>
      <button onClick={handleDecrement} className='w-30 p-3 border rounded-lg focus:outline-none focus:ring-2 bg-green-200'>Decrement</button>
    </div>
  )
}

export default CustomHook
