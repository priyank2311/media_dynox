import React from 'react'
import logo from '../assets/Unified Investment logo.png'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between py-3 px-[12rem]'
    >
      <div>
        <img src={logo} alt='logo' />
      </div>

      <div className='text-[#fff] flex items-center justify-center'>
        <ul className='flex gap-24 items-center justify-center cursor-pointer font-sans'>
          <div>
            <div className='bg-[#FEB564] w-7 h-0.5'></div>
          <li>COMPANY</li>
          </div>

          <div className='flex justify-center items-center gap-2'>
            <li>INVESTORS</li>
            <RiArrowDropDownLine style={{fontSize:'30px'}} />
          </div>

          <div className='flex justify-center items-center gap-2'>
            <li>PRODUCTS</li>
            <RiArrowDropDownLine style={{fontSize:'30px'}} />
          </div>
          
          <li>JOURNAL</li>
          <li>REACH US</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar