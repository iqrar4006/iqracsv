import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './Navbar';
import Upload_data from './Upload_data';
import UserContext from '../context/UserContext';


const Upload = () => {
    
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
  const {navbarShow,setNavbarShow}= useContext(UserContext)
  // console.log('navbarShow',navbarShow)
  const hiddenNavbar='hidden md:block w-full md:w-1/4 h-full absolute md:static  rounded-3xl mr-4 z-30 bg-white'
  const showNavbar='md:block w-full md:w-1/4 h-full absolute md:static rounded-3xl mr-4 z-30 bg-white '
  return (
    <>
    <div className="w-full h-screen flex ">
        <div className={navbarShow?showNavbar:hiddenNavbar}>
            <Navbar />
        </div>
        <div className='w-full relative md:w-3/4 z-20 bg-zinc-50	'>
            <Upload_data />
        </div>

    </div>

    </>
  )
}

export default Upload
