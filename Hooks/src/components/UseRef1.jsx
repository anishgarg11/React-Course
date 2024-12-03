import React, { useEffect, useState, useRef } from "react";

function UseRef1() {
  const inputEle = useRef();

  const btnClicked = () => {
    console.log(inputEle.current);
    inputEle.current.style.background = "grey";
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <input type="text" ref={inputEle} />
      <button onClick={btnClicked}>Verify</button>
    </>
  );
}

export default UseRef1;
