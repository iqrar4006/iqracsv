import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { MdDashboard } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import UserContext from '../context/UserContext';
import { FaFileInvoice } from "react-icons/fa";
import zigzag_white from '../images/zigzag_white.png'





const Navbar = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const { navbarShow, setNavbarShow } = useContext(UserContext)

    const handlCrossClick = () => {
        setNavbarShow(false);
    };

    return (
        <>
            <div className="w-full h-full px-6">
                <div className='flex md:block justify-between items-center py-2'>

                    <div className=' flex items-center text-center font-mono text-2xl font-medium'>
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
                    <div className=' text-2xl md:hidden'>
                        <RxCross1 onClick={handlCrossClick} className='cursor-pointer' />
                    </div>
                </div>


                <div className='flex flex-col mt-6'>
                    <NavLink to="#" className="font-mono text-xl font-medium text-zinc-500 p-2 hover:bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60%" >

                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <MdDashboard />
                            </div>
                            <div>
                                Dashboard
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/upload" className={({ isActive, isPending }) =>
                        isPending ? "font-mono text-xl font-medium text-zinc-500 p-2 hover:bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60%" : isActive ? "font-mono text-xl font-medium text-[#5C5EEE] p-2 bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60%" : ""
                    } >

                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <MdFileUpload />
                            </div>
                            <div>
                                Upload
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="font-mono text-xl font-medium text-zinc-500 p-2 hover:bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60% " >

                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <FaFileInvoice />
                            </div>
                            <div>
                                Invoice
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="font-mono text-xl font-medium text-zinc-500 p-2 hover:bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60% " >

                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <AiFillSchedule />
                            </div>
                            <div>
                                Schedule
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="font-mono text-xl font-medium text-zinc-500 p-2 hover:bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60%" >
                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <FaCalendarAlt />
                            </div>
                            <div>
                                Calender
                            </div>
                        </div>

                    </NavLink>

                    <NavLink to="#" className="font-mono text-xl font-medium text-zinc-500 p-2 hover:bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60%" >
                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <IoIosNotifications />
                            </div>
                            <div>
                                Notification
                            </div>
                        </div>

                    </NavLink>

                    <NavLink to="#" className="font-mono text-xl font-medium text-zinc-500 p-2 hover:bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60%" >
                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <IoMdSettings />
                            </div>
                            <div>
                                Setting
                            </div>
                        </div>

                    </NavLink>
                    <NavLink to="#" className="font-mono text-xl font-medium text-zinc-500 p-2 hover:bg-gradient-to-r from-blue-100 from-5% via-white via-35% to-white to-60%" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        <div className='flex items-center '>
                            <div className='mr-4'>
                                <IoLogOut />
                            </div>
                            <div>
                                Logout
                            </div>
                        </div>

                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Navbar
