// custom hook
import { useState } from 'react'

function useAdditionApp() {
  const [add, setAdd] = useState(0)

  const handleAddition = () => setAdd(prev => prev + 1)
  const handleSubtraction = () => setAdd(prev => prev - 1)
  const handleMultiplication = () => setAdd(prev => prev * 2)
  const handleDivision = () => setAdd(prev => prev / 2)

  // array return karna okay hai, but object return karna aur readable hota hai
  return {add, handleAddition, handleSubtraction, handleMultiplication, handleDivision}
}

export default useAdditionApp
