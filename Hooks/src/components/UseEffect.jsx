import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(10);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.warn("useeffect called");
  }, [data]);

  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <h1>Count : {count} </h1>
      <h1>Count : {data} </h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </>
  );
}

export default UseEffect;
