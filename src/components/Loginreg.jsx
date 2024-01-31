import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import zigzag from '../images/zigzag.png'






const Loginreg = () => {
  let navigate = useNavigate()

  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <div className='w-full h-screen xs:bg-gradient-to-r xs:from-[#f2f4fa] sm:to-[#f2f4fa] xs:bg-[#f2f4fa] custom_gradient'>

        <div className='flex items-center justify-center sm:flex-row xs:flex-col w-full h-screen lg:px-8 md:px-4 sm:px-2' >

          <div className='lg:w-1/2 md:w-2/5 sm:w-2/5 xs:w-full sm:py-5 xs:pl-12 sm:h-screen xs:h-[15%]  flex sm:flex-col items-center sm:justify-center text-slate-50 xs:bg-[#5C5EEE]'>
            <div className='sm:w-full sm:h-1/2 text-start relative'>
              <div
                className='w-[50px] h-[50px] rounded-full bg-white mr-2 sm:ml-10 relative'
              >
                <div
                  className='absolute inset-0 flex items-center justify-center'
                  style={{
                    background: `url(${zigzag}) center center / cover no-repeat`,
                    borderRadius: '50%',
                  }}
                ></div>
              </div>
            </div>
            <div className='sm:h-1/2 flex flex-col '>
              <div className='font-mono lg:text-6xl sm:text-5xl xs:text-4xl font-bold flex-grow'>
                BASE
              </div>
              <div className='sm:flex hidden '>
                <FaGithub size={28} className='mr-4 cursor-pointer' onClick={() => {window.open(`https://github.com/iqrar4006`);  }} />
                <AiFillTwitterCircle size={28} className='mr-4 cursor-pointer' /> 
                <FaLinkedin size={28} className='mr-4 cursor-pointer' onClick={() => {window.open(`https://www.linkedin.com/in/iqrar-ahmad/`);  }} />
                <IoLogoDiscord size={28} className='mr-4 cursor-pointer' />

              </div>
            </div>

          </div>

          <div className='lg:w-1/2 md:w-3/5 sm:w-3/5 sm:h-screen xs:h-[85%] flex items-center justify-center flex-col'>

            <div className="w-full">
              <p className="font-mono md:text-4xl sm:text-3xl font-bold text-left lg:ml-40 md:ml-40 sm:ml-28 mb-3">Sign In</p>
            </div>

            <div className="w-full">
              <p className="font-mono md:text-2xl sm:text-xl font-bold text-left lg:ml-40 md:ml-40 sm:ml-28 mb-1">Sign in to your account</p>
            </div>

            <div className='flex  flex-col mt-2 w-full'>

              <div className="w-full ">
                <button className='border-slate-100 rounded-md	bg-white md:text-2xl sm:text-xl font-serif px-6 py-2 mb-6 mt-5 lg:ml-40 md:ml-40 sm:ml-28  hover:bg-[#5C5EEE] hover:text-slate-50' onClick={(e) => loginWithRedirect()}>
                  <div className='flex justify-center items-center'>
                    <div className='mr-4'>
                      <CiLogin />
                    </div>
                    <div>
                      Login/Registration
                    </div>
                  </div>
                </button>
              </div>

              <div className="w-full ">
                <button className='border-slate-100 rounded-md	bg-white md:text-2xl sm:text-xl font-serif px-6 py-2 mb-10 mt-5 lg:ml-40 md:ml-40 sm:ml-28 hover:bg-[#5C5EEE] hover:text-slate-50' onClick={(e) => loginWithRedirect()}>
                  <div className='flex justify-center items-center'>
                    <div className='mr-4'>
                      <FcGoogle />
                    </div>
                    <div>
                      Sign in with Google
                    </div>
                  </div>
                </button>
              </div>

              <div className="w-full">
                <button className='border-slate-100 rounded-md	bg-white md:text-2xl sm:text-xl font-serif px-6 py-2 lg:ml-40 md:ml-40 sm:ml-28 hover:bg-[#5C5EEE] hover:text-slate-50' onClick={(e) => loginWithRedirect()}>
                  <div className='flex justify-center items-center'>
                    <div className='mr-4'>
                      <FaApple />
                    </div>
                    <div>
                      Sign in with Apple
                    </div>
                  </div>
                </button>
              </div>

              <div className='flex sm:hidden mt-10 mx-auto'>
              <FaGithub size={28} className='mr-4 cursor-pointer' onClick={() => {window.open(`https://github.com/iqrar4006`);  }} />
                <AiFillTwitterCircle size={28} className='mr-4 cursor-pointer' /> 
                <FaLinkedin size={28} className='mr-4 cursor-pointer' onClick={() => {window.open(`https://www.linkedin.com/in/iqrar-ahmad/`);  }} />
                <IoLogoDiscord size={28} className='mr-4 cursor-pointer' />

              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Loginreg






