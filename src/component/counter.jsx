// import React, {useState} from 'react'

// const Count = () => {
//     const [ count,setcount]= useState(0);

//     function increment (){
//         setcount(count+1);
//     }
//     function decrement(){
//         setcount(count-1);

//     }
//     function reset(){
//         setcount(0);
//     }

//   return (
//     <div className='bigmain'>
//       <h1>{count}</h1>
//       <div className='smallmain'>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   )
// }

// export default Count;



import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import "./counter.css";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  function increment(){
        setCount (count+1);
      }
      function decrement(){
        setCount (count-1);
      }
      function reset (){
        setCount (0);
      }
    
      return (
        <div className="maindiv">
          <h2>Counter: {count}</h2>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset button</button>
        </div>
      );
    };
    
    export default Counter;




