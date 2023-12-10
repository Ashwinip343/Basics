import React from 'react'

export const Extra= () => {
    const age=15
    const isgreen = true
    const arr=["Ash","Priya","kajal","Eve"];
    
    const Info=(props)=>{
    return (
      <div>
        <h1 className='name'>{props.name}</h1>
        <h1>{props.email}</h1>
        <h1>{props.age}</h1>
      </div>
    );
};
  
  return (

    <div>
    <Info name="Ashwini" email="anytihng.com"/>
    <Info name="HEthere" age="21" email="anytirhng.com"/>
   
   {age>=18 ? <>Over Age</> : <>Under Age</>}  {/* //ternary operator */}
   
   <h1 style={{color: isgreen ? "orange" :"red"}}>Style</h1>
   

   

   {isgreen && <button style={{color:"white"}}>Click it!</button>}

   {/* Lists in React - for each loop arr[0]*/}
   {/* functions for for-each loops in react - foreach, map , filter , reduce */}
   
   

  
    <div>
        {arr.map((name , keya)=>{
    return <h1 style={{color: keya%2==0 ?  "red" : "blue "}}>{name} {keya}</h1>
   })}



    </div></div>
  )
}
