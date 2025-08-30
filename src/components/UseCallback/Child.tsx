import React from 'react'

function Child({addition}:{addition:(a:number,b:number)=>number}) {
    console.log('Child Called');
    
  return (
    <div>
      <h2>Addition Result: {addition(5, 10)}</h2>
    </div>
  )
}

export default React.memo(Child);