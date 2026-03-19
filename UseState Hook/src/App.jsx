import React, { useState } from 'react'

const App = () => {
  
  const [value, setValue] = useState(1)
  
  function increase(){
    setValue(value+1)
  }
  function decrease(){
    if(value>0)
    setValue(value-1)
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <button onClick={increase}>Increase the value</button>
      <button onClick={decrease}>Decrease the value</button>
    </div>
  )
}

export default App