import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div >
         <div>
          <Link className='m-4' to="/">Cat Facts</Link>
        <Link className='m-4' to="/excuse">N-Excuse</Link>
        <Link className='m-4' to="/excusecategory">Category</Link>
        <Link className='m-4' to='/Framermotion'>Framer Motion</Link>
      </div>
    </div>
  )
}
