import React, { useState } from 'react'
import Axios from 'axios'

export const Excuse = () => {

const [input,setInput]=useState(0)
const [excuse, setexcuse]=useState([])


 const generate=()=>{
    Axios.get( `https://excuser-three.vercel.app/v1/excuse/${input}`).then((res)=>
    setexcuse(res.data))}
  return (
    <div>
        <div className='flex flex-col'> 
       
        <input type="text" className='p-3 mx-auto text-black bg-white rounded-lg mt-9 w-60' placeholder='Ex. 3' onChange={(event)=>{setInput(event.target.value)}}  />
        
              {/* <div className='flex flex-row mx-auto '>
            <button className='p-5 bg-black shadow-md shadow-green-500/50 mt-5 mx-2 rounded-lg' onclick={()=>(setCategory("developers"))}>Developers</button>
            <button className='p-5 bg-black shadow-md shadow-green-500/50 mt-5 mx-2 rounded-lg' onclick={()=>(setCategory("gaming"))}>Gaming</button>
            <button className='p-5 bg-black shadow-md shadow-green-500/50 mt-5 mx-2 rounded-lg' onclick={()=>(setCategory("college"))}>College</button>
        </div> */}
        <button className='mx-auto mt-6 px-5 py-3 rounded-lg w-60 font-bold bg-black text-white font-bold shadow-md shadow-black' onClick={generate} >Generate n random excuses</button>
  
        <div>
            {excuse.map((val,key)=>{
              
                return (
                 <div> 

                    <div className='w-10/12 shadow-md shadow-black bg-black p-3 my-8 mx-auto rounded-lg'> {key+1} . {val.excuse}</div>          </div>     )
            })

            }
        </div>
        </div>
       
    </div>
  ) 
}
