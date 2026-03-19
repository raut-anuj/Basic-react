//form binding and two way data binding.

import React , {useState} from 'react'

const App = () => {

  const [text, settext] = useState('')

  const submit = (e) => {
    e.preventDefault()
    console.log("submitted", text);
    // settext('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submit(e)
      }}>
        <input 
        type="text" 
        placeholder='name'
        // value={text}
        onChange={ (e)=>{
          settext(e.target.value)
        }}
        />

        {/* <input type="text" placeholder='password'/> */}
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App