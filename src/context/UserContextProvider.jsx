import React, { useState } from 'react'
import UserContext from './UserContext'



const UserContextProvider = ({children}) => {
    const [navbarShow, setNavbarShow]= useState(false)
    const [data,setData]=useState(null)
  return (
    <>
      <UserContext.Provider value={{navbarShow,setNavbarShow,data,setData}} >
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider
