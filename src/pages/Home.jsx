import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
import { Planets } from '../components/Planets'


export const Home = () => {
  
  const {data ,refetch}=useQuery(["cat"],()=>{
   return  Axios.get("https://catfact.ninja/fact").then((res)=>res.data.fact)
  })

  const {username}=useContext(AppContext)
  return (
    <div>
      <h2 className='card bg-white text-black rounded-lg mt-9 mx-auto w-9/12 font-bold shadow-lg shadow-black'>{data}</h2>
      <button className='p-3 bg-black m-5 rounded-lg shadow-md shadow-purple-500/50' onClick={refetch}>Update Fact</button>
      
      </div>
  )
}
