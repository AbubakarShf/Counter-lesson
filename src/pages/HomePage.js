import React from "react";
import CounterClass from '../components/CounterClass/CounterClass';
import CounterFunc from '../components/CounterFunct/CounterFunc';

// FunctionBased
const HomePage = () => {
  return (
    <div className='Container'>
      <CounterClass initailData={10}/>
      <CounterFunc initailData={20}/>
    </div>
  )
}
export default HomePage
