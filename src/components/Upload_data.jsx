import React, { useContext } from 'react'
import Upload_header from './Upload_header'
import Upload_middle from './Upload_middle'
import { useAuth0 } from '@auth0/auth0-react';
import Upload_table from './Upload_table';
import UserContext from '../context/UserContext';

const Upload_data = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const {data}=useContext(UserContext)
  return (
    <div className='flex flex-col h-full w-full'>
        <Upload_header user={user}/>
        <Upload_middle />
        {data?<div className='p-4 font-mono text-2xl font-bold'>Uploads</div>:''}

       {data?<Upload_table />:''} 
        
      
    </div>
  )
}

export default Upload_data
