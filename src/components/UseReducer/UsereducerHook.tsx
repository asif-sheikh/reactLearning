import { useReducer } from 'react'

function UsereducerHook() {
  const initialState  = {
    count : 10
  }
  const reducerFn = (state:any,action:any) =>{
    console.log('State', state);
    console.log('Action', action);
    switch(action.type) {      
      case  'Increment' :  return  {count : state.count + 1}
      case  'Decrement' :  return  {count : state.count - 1}
      case  'Reset' :  return  {count : 0}
      default : return state
    }  
  }
      const [state,dispatch] = useReducer(reducerFn , initialState)
  return (
    <div>
        <button onClick={() => dispatch({type:'Increment'})} className='bg-blue-500 px-3 m-2'>Increment</button>
        <button onClick={() => dispatch({type:'Decrement'})} className='bg-amber-500 px-3 m-3'>Decrement</button>
        <button onClick={() => dispatch({type:'Reset'})} className='bg-red-500 px-3 m-3'>Reset</button>
        <h1>Count : {state?.count}</h1>
    </div>
  )
}

export default UsereducerHook