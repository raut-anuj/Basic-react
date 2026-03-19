import React, { useState } from 'react'

const App = () => {
  
  // const [value, setValue] = useState({name:'anuj',  age:20})
  
  // const increase = () => {
  //   // console.log(value - 1)
  //   // setValue(value + 1)
  //   // setValue(value + 1)
  //   // setValue(value + 1)
  //   setValue(value + 1)
  //   // console.log(value);   
  // }
  // const decrease = () => {
  //   if(value>0)
  //   setValue(value - 1)
  // }

  // function change(){
  //   const newValue = {...value};
  //   newValue.age=29 
  //   newValue.name='Kumar'
  //   setValue(newValue)
  // }

  return (
    <div>
      {/* <h1>Counter</h1> */}
      {/* <h2>{value.name}, {value.age}</h2> */}
      <button onClick={change}>Change the value</button>
      {/* <button onClick={decrease}>Decrease the value</button> */}
    </div>
  )
}

export default App