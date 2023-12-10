import React from 'react'
// State Management in React - useContext Hook
// It solves the problem of prop drilling - passing props to another component without using it
//Context API to solve this problem
// It allows to put all the states and functions into one place & can be accessed by the components without having any prompts

import { useState } from 'react'
import { useContext } from 'react'
import  { AppContext } from '../App'


export const ChangeProfile = (props) => {
    const [newusername, setnewusername] = useState("")
    
    const {setUsername}=useContext(AppContext)
  return (
    <div>
    <input type="text" placeholder='Ex. John'  onChange={(event)=>setnewusername(event.target.value)}/>
    <h1>{newusername}</h1>
     <button onClick={()=>{setUsername(newusername)}}>Change username</button>
    </div>
  )
}
