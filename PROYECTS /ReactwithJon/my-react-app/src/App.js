import React, { useState } from "react";
import "./App.css";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  const asyncshit = () => {
    setTimeout(()=>{setCounter(counter + 1);},1500) 
  }

  const impar =()=>{
 if(counter % 2 !== 0) {
   setCounter(counter+1)
 }
  }
  return {
    counter,
    increase,
    decrement,
    reset,
    asyncshit,
    impar,
  };
};





export default function App() {
  const { counter, increase, decrement, reset,asyncshit ,impar} = useCounter();

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>zero</button>
      <button onClick={asyncshit}>async</button>
      <button onClick={impar}>impar</button>
    </div>
  );
}

