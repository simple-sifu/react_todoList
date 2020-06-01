import React from 'react'
import ToDos from './ToDos'

export default function Manager({handleChange, handleSubmit, todos}) {
  return (
    <div>
       <input type="text" 
              placeholder="enter item" 
              onChange={handleChange}/>

      <button onClick={handleSubmit}>Enter</button>

      <ToDos todos={todos}/>
    </div>
  )
}


