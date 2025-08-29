import { useEffect, useState } from 'react'

function UseEffectHook() {

    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(10);

//   this will run on every render 
//   useEffect(() =>{
//     console.log('hello useEfect hook ....');   
// }) 

 
// this will run only one time or on first render 
// useEffect(() =>{
//     console.log('this will run only one time '); 
// },[])

// this will render on every number state change 
useEffect( ()=>{
    console.log('useEffect');   
},[number])

// cleanup functions in useEffect
// useEffect( ()=>{
//    const interval =  setInterval(()=>{
//         setCount((prev)=> prev+1)
//     },1000) 
//     return ( ) =>{ clearInterval(interval)}
// },[])

  return (
    <div>
        <h1>Learning UseEffectHook</h1>
        <h3>count: {count}</h3>
        <h3>number: {number}</h3> 
        <button  onClick={() => setCount(count+1)}>Increment</button> <br />
        <button  onClick={() => setNumber(number-1)}>Decrement</button>
    </div>
  )
}

export default UseEffectHook