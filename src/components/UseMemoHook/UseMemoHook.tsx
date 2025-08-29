import {useState,useMemo} from 'react'
import ReactMemo from './ReactMemo';

function UseMemoHook() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(0);

  const heavyCalculation = useMemo(() => {
    console.log("Computing...");
    for (let i = 0; i < 10000; i++) {} 
    return add * 2;
  }, [add]);

  return (
    <div>
      <h1>UseMemo Hook</h1>
      <h2>Add: {add}</h2>
      <h2>Minus: {minus}</h2>
      <h2>Computed Value: {heavyCalculation}</h2>
      <button onClick={() => setAdd(add + 1)}>Increment Count</button>
      <button onClick={() => setMinus(minus - 1)}>Decrement Minus</button>
      <ReactMemo heavyCalc={heavyCalculation} />
    </div>
  )
}

export default UseMemoHook