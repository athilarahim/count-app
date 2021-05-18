import React,{useState} from 'react'
function Show() {
    const [count,setCount] = useState(0)
    return (
        <div>
           <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>I'm a component {count}</h1>
        </div>
    )
}

export default Show
