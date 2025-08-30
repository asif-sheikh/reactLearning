import { useCallback, useState } from "react";
import Child from "./Child";

function UseCallback() {
  const [count, setCount] = useState(0);
  let a= 5;
  let b= 10;
  const addition = useCallback(() => {
    // console.log("addition called");
    return a + b;
  }, []);
  // empty dependecy means child sirf ek hi baar calll hoga baar baar call nahi karna padega....
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <h2>Addition Result: {addition(5,10)}</h2> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child addition={addition} />
    </div>
  );
}
export default UseCallback