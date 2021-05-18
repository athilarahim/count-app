import React from 'react'

function Employee({...obj}) {
    return (
        <div>
            <h1>{obj.name} {obj.age}</h1>
        </div>
    )
}

export default Employee
