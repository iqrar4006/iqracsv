import React, { useContext, useEffect, useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import UserContext from '../context/UserContext';
import zigzag_white from '../images/zigzag_white.png'




const UploadHeader = ({ user }) => {
    const { navbarShow, setNavbarShow } = useContext(UserContext)
    // console.log('navbarShow',navbarShow)

    const handleHamburgerClick = () => {
        setNavbarShow(true);
    };

    return (
        <div className='flex justify-between w-full  pt-2 px-2'>
            <div className='font-mono text-2xl font-bold flex items-center'>
                <GiHamburgerMenu className='text-3xl md:hidden cursor-pointer mr-2' onClick={handleHamburgerClick} />
                <div className='hidden md:block'>
                    Upload CSV
                </div>
                <div className=' flex md:hidden items-center text-center font-mono text-2xl font-medium'>
                    <div
                        className='w-[50px] h-[50px] rounded-full bg-[#5C5EEE] mr-2 relative'
                    >
                        <div
                            className='absolute inset-0 flex items-center justify-center'
                            style={{
                                background: `url(${zigzag_white}) center center / cover no-repeat`,
                                borderRadius: '50%',
                            }}
                        ></div>
                    </div>                   
                     Base
                </div>
            </div>
            <div className='flex items-center'>

                <IoIosNotificationsOutline className='text-3xl mr-2 cursor-pointer ' />

                <img className="w-8 h-8 rounded-full cursor-pointer mr-2" src={user.picture} alt={user.name} />


            </div>
        </div>


    );
};

export default UploadHeader;



