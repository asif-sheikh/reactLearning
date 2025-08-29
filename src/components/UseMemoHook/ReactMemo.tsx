import React from 'react'   

function ReactMemo({ heavyCalc }: { heavyCalc: number }) {
    console.log('Rendering ReactMemo children component');
    return (
        <div>ReactMemo: {heavyCalc}</div>
    )
}

export default React.memo(ReactMemo);