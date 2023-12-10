import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios';

//API 

export const ApiCalls = () => {
    const [catfacts, setcatfacts] = useState("")
    
    const fetchfact=()=>{

        Axios.get("https://catfact.ninja/fact").then((res)=>{setcatfacts(res.data.fact)})

    }
   useEffect(() => {
        fetchfact()
       }, [])

   //useeffect is mounted , unmounted then mounted , that's why two facts appear only 

  return (
    <div>
        <button onClick={fetchfact} className='w-max bg-black text-white font-bold shadow-md text--300 shadow-purple-500/50'>
            Generate Cat facts
        </button>
        <p className='mx-28 my-10' >{catfacts}</p>
    </div>
  )
}
