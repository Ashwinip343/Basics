import React from 'react'

export const Planets = () => {
    const planets=[
    {name:"Mars" , isGasplanet:true},
    {name:"Earth" , isGasplanet:false},
    {name:"Jupiter" , isGasplanet:true},
    {name:"Venus" , isGasplanet:true},
    {name:"Neptune" , isGasplanet:true}

  ]
   return (
    <div>
     {planets.map((planet,key)=>planet.isGasplanet ?<h1>{planet.name}</h1> : null)}
     
    </div>
  )
}
