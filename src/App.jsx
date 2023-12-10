// props cannot be modified inside the function
// data never flows from child component to parent component
// capital letters
// use {} for numbers aas arguments
// app.module.css - you dont have to give the classname as strings 
//  - import styles from  "./app.module.css"
//  - className={style.name} instead of className="name"


// conditional rendering - ternary opertor (?:) 

import './App.css' 



import { BrowserRouter  ,Routes,Route} from 'react-router-dom';
// browserroute - exactly where in the app we want to have different routes like the navbar
//routes -  only change a specific part of website

 // group of components having access to same data i.e state or functions are stored in a global context
import { ExcuseCategory } from './components/ExcuseCategory';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact} from './pages/Contact';
import {useState , createContext} from 'react'
import { Framermotion } from './components/Framermotion';
import {Navbar} from './components/Navbar'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { Excuse } from './components/Excuse';
import { Planets } from './components/Planets';


// Api fetch , we get it in the json format
// fetch("https://catfact.ninja/fact")
  // .then((res)=>res.json)
  // .then((data)=>{
  //   console.log(data)
  // })

//
// we dont use this method coz it gets into an infinite loop , it'll infinitely call the api

export const AppContext = createContext() 

function App() { 
  const client=new QueryClient({defaultOptions:{
    queries:{refetchOnWindowFocus:false}
  }})
 
  // the empty array will mount only once, so the api is called only once not ifinitely

  const [username , setUsername] = useState("Ashh")

  
  return (
    <div> 
      


      <QueryClientProvider client={client}>

      {/* <ApiCalls/> */}
      {/* <PredictAge/> */}
      {/* <Excuse></Excuse> */}
      {/* <ExcuseCategory/> */}
      
      <AppContext.Provider value={{username,setUsername}}>
        {/* all the components inside this have the access to the common data inside the context */}
      <BrowserRouter>
     <Navbar/>
      <Routes>
        {/* //describes/defines the routes used by browser router */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/excuse' element={<Excuse/> }></Route>
        <Route path='/excusecategory' element={<ExcuseCategory/>}></Route>
       <Route path='/Framermotion' element={<Framermotion/>}></Route>
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
      </AppContext.Provider>
      
      </QueryClientProvider>
      {/* // all the components inside the queryprovider will have access to the query */}
   </div>
  
   
  )
}

export default App
