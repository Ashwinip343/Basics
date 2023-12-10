import React from 'react'
import { ChangeProfile } from '../components/ChangeProfile'
import { useContext } from 'react'
import  { AppContext } from '../App'


export const Menu= (props) => {
  const {username}=useContext(AppContext)
  return (
    <div>This is the {username}

    <ChangeProfile />
    </div>
  )
}
