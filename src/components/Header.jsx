
import React from 'react'

function Header(props){ 
    const nextPage=()=> console.log("Yay successful!")
    
    return <div>
    <h1>{props.name}</h1></div>
    {/* <button onClick={nextPage}>Hey there</button></div> */}
  }

export default Header;
