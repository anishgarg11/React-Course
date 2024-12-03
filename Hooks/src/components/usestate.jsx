import React, { useState } from "react";

function usestate() {
  const [age, setAge] = useState(1);
  const [Siblings, setSiblings] = useState(5);

  const updateAge = () => {
    setAge((prev) => prev + 1);
    setAge((prev) => prev + 1);
  };

  const UpdateSiblings = () => {
    setSiblings(Siblings + 1);
  };

  const [count, setCount] = useState(1);

  return (
    <>
      <h1>I am {age} Years of Age</h1>
      <h3>I have {Siblings} Siblings</h3>
      <button onClick={updateAge}>Get Older</button>

      <button onClick={UpdateSiblings}>More Siblings</button>

      <p>Count Value is: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Plus(+)
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Minus(-)
      </button>
    </>
  );
}

export default usestate;
