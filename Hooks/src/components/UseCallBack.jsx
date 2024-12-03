import React, { useCallback, useState } from "react";
import Header from "./Header";
function UseCallBack() {
  const [count, setCount] = useState(0);

  const newFn = useCallback((count) => {}, [count]);
  return (
    <>
      <br />
      <br />
      <br />

      <Header newFn={newFn} />
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click Here
      </button>
    </>
  );
}

export default UseCallBack;
