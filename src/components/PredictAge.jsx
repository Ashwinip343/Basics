import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';


export const PredictAge = () => {

  const [name, setname] = useState("")
  const [predicted, setpredicted] = useState({})

  const fetchdata=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setpredicted(res.data)
    })}

  return (
    <div>
        <input placeholder='Ex. John ' className='text-sm p-3 rounded-md' onChange={(event)=>setname(event.target.value)}></input>
        
        <button className='p-3 bg-black shadow-md shadow-purple-500' onClick={fetchdata}> Predict Age </button>
        <div className='flex flex-col'>
        <h2 className='mt-8 mb-3'>Name : {predicted.name}</h2>
          <h2 className='mb-3'>Predicted Age : {predicted.age}</h2>
          <h2>Predicted Count: {predicted.count}</h2>
         
        </div>

        
    </div>
  )
}
