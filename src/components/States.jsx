import React, { useEffect } from 'react'
import { useState } from 'react'
// use state 
// event.target.value - to get the realtime input text
export const States = () => {
    const [age, setAge] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const [show, setShow] = useState(true)
    const [colours, setcolours] = useState("green")

    {/* React Lifecycle - mounting , updating , unmounting*/}
    {/* Useffect hook  */}
    // Mounting - something appears on the screen 
    // Unmounting - something dissapears
    // useffect is called whenever there's a state change in the component 
    // or the props is being passed in app component , changes when we give input
    // or while updating something , like the text in this case
    // what if we dont want to call useffect while we're updating , 
    // we pass an arrray in the useeffect hook to specify what action should trigger the use effect
    // like in this case , we want the state change (only) to trigger the use function , we can specify the stateChange in the array 
    // if you pass an empty array , the mouting is done only once



    // Fetching Data from API's in react



    useEffect(() => {
        console.log("component mounted") 
        return ()=>{console.log("component unmounted")}
    })
    
    const col=[ "red","blue","green","pruple"]  

    const HandleInput=(event)=>{
        setInputValue(event.target.value)   
    }
    // const hide=()=>{
    //     setShow(!show)
    // }
    const Inc=()=>{
        setAge(age+1)
    }
    const Dec=()=>{
        { age ? setAge(age-1) : setAge(0)}

    }
  return (

    <div className='states'> 
    <button onClick={Dec}>Decrease Age</button>
     {age} 
    <button onClick={Inc}>Icrease age</button>


    <div><input type='text' onChange={HandleInput}/>{inputValue}</div>
    <button onClick={()=>setShow(!show)}>Show/hide</button>
    <button onClick={()=>{ setcolours(colours === "green" ? "blue" : "green")}}>Change Colour</button>
    { show===true && <h1 style={{color:colours}}>Hii , Ashwini Here </h1>}


   

        </div>
  )
}
