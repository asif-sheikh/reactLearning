import { useEffect, useRef, useState } from "react";
// Best for storing timers, Previous Values and DOM References
function UseRefHook() {
  const inputRef = useRef(null);
  const [name, setName] = useState("Asif");
  const [count, setCount] = useState(0);
  const prevRef = useRef(0);
  useEffect( () =>{
    prevRef.current = count;
    // count ki previous state ko store karwa diya jab count 1 hoga to prevRef.current = 0
  },[count])
  const handleReset = () => {
    console.log(inputRef.current);
    setName("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleColor = () => {
    if (inputRef.current) {
      inputRef.current.style.color = "red";
    }
  };

  return (
    <div>
      <h1>Learning useRef Hook ....</h1>
      <h2>PrevState : {prevRef.current}</h2>
      <h2>newState : {count}</h2>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border outline"
      />
      <br />
      <button
        onClick={handleReset}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md transition"
      >
        reset
      </button>
      <button
        onClick={handleColor}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md transition"
      >
        Change Color
      </button>

         <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md transition"
      >
        Change State
      </button>
    </div>
  );
}

export default UseRefHook;
