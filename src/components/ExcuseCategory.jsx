import React, { useState } from 'react'
import Axios from 'axios'

export const ExcuseCategory = () => {


const [excuse, setexcuse]=useState([])



 const generate=(category)=>{
   
    Axios.get( `https://excuser-three.vercel.app/v1/excuse/${category}`).then((res)=>
    setexcuse(res.data)
   )}
  return (
    <div>
        <div className='flex flex-col'> 
       
                    <div className='flex flex-row mx-auto '>
            <button className='p-5 bg-black shadow-md shadow-black mt-5 mx-2 rounded-lg' onClick={()=>generate("developers")}>Developers</button>
            <button className='p-5 bg-black shadow-md shadow-black mt-5 mx-2 rounded-lg' onClick={()=>generate("gaming")}>Gaming</button>
            <button className='p-5 bg-black shadow-md shadow-black mt-5 mx-2 rounded-lg' onClick={()=>generate("college")}>College</button>
        </div>
       
        <div>        
          {excuse.map((item)=>{
            return(
              <div className='w-10/12 shadow-md shadow-black font-bold text-black bg-white p-3 my-8 mx-auto rounded-lg'>{item.excuse}</div>              
            )
          })}
         
         
        
        </div>
        </div>
       
    </div>
  ) 
}
