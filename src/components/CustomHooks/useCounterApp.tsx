import { useState } from 'react'

function useCounterApp(initialState=100,step=2) {
    const [count,setCount] = useState(initialState);
    const handleIncrement = () => setCount(prev => prev + step);
    const handleDecrement = () => setCount(prev => prev - step);
    return {count, handleIncrement, handleDecrement};
}

export default useCounterApp