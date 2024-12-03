import React,{useState, useEffect, useMemo} from 'react'
function UseMemo() {
    const [num, setNum] = useState(0)
    const [counter, setCounter]= useState(0)

    function SqNum(numb){
        console.log("Calculation Done");
        return Math.pow(numb, 2)
    }

    const result = useMemo(()=> SqNum(num), [num])
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <input type= "number" value={num} onChange={(e)=>{setNum(e.target.value)}} />
    <h1>Square of the Number: {result}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
    <h1>Counter: {counter}</h1>
    </>

  )
}

export default UseMemo