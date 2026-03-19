import React, {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [list, setList] = useState([])

  const submit = (e)=>{ 
    e.preventDefault()

    const task =[...list];
    task.push({title,detail})
    setList(task)
    console.log(task);
    // console.log(setList);
    
    setTitle('')
    setDetail('')
    // console.log(task);
    
    }
  // const submit2 = (e)=>{ 
  //   e.preventDefault()
  //   console.log(detail);
  //   }
const deleteTask = (idx) => {
  const deletelist = [...list]
  deletelist.splice(idx,1)
  setList(deletelist)
}

  return (
    <div>
    <form onSubmit={(e) => {
        submit(e)
        }}>
          
        <input 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        type="text" placeholder='Enter text'/>

        <input
        value={detail} 
        onChange={(e)=>{
        setDetail(e.target.value)
        }}
        type="text" placeholder='Write details'/> 
      
      <button >Submit</button>
        </form> 
      <h2>
      {list.map((e, idx) => {
        return (
          <div key={idx}>
            {idx}{e.title} {e.detail}
            <button onClick={()=>{deleteTask(idx)}}>Delete this list</button>
          </div>
        )
      })}
    </h2>
    </div>
  )
}

export default App