import React, { useState } from "react"
import './CounterFunc.css'
const CounterFunc = ({ initailData }) => {
  const [count, setCount] = useState(initailData)
  const UpdateCounter = (val) => {
    setCount((PrevState) => PrevState + val)
  }
  return (
    <div className='container'>
      {console.log("CounterFunc is rendered")}
      <h1>CounterApp-Func</h1>
      <button className="IncBtn" onClick={() => UpdateCounter(+1)}>+</button>
      <span>{count}</span>
      <button className="DecBtn" onClick={() => UpdateCounter(-1)}>-</button>
    </div>
  )
}

export default CounterFunc
