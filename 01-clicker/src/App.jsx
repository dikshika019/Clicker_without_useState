import React, { useState } from 'react'
 
const App = () => {


      let num= 0
      function increasenum(){
        console.log('increasing');
        num = num +1
        console.log(num)
      }
      function decreasenum(){
        console.log('decreasing');
        num = num - 1
        console.log(num)
      }
  


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>increase</button>
      <button onClick={decreasenum}>decrease</button>
    </div>
  )
}



export default App