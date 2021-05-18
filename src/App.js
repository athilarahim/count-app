import {useState} from 'react'
import Counter from './Counter'
import Employee from './Employee'
import Show from './Show'

function App() {
  const [count,setCount] = useState(0)
  const [show,setShow] = useState(false)
  const addCount = () =>{
    setCount(count+1)
  }

let emp = [{
  name : 'Athila',
  age : 21
},{
  name : 'Ajmal',
  age : 26
},{
  name : 'Asif',
  age : 29
}
]

  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
      <Counter count={count}/>
      
      {
        emp.map((obj,index) => {
          return(
            <Employee key={index} {...obj}/>
          )
        })
      }
        <h1 onClick={()=>setShow(!show)}>Hide/Show</h1>
         {show? <Show />:null}
    </div>
  );
}
export default App;
