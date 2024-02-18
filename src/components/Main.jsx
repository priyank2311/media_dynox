import React from 'react'
import theme from '../assets/mainImg.png'
import image from '../assets/mainImg2.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export const Main = () => {
  return (
    <div className='w-full h-screen bg-cover bg-no-repeat bg-center flex items-center pb-[18rem] gap-8'
    style={{ backgroundImage: `url(${theme})`, color: 'white' }}>
      <div className='flex-1 flex pl-[13rem]'>
        <div>
          <h1 className='font-serif font-normal text-6xl leading-[67.8px]'>
          <div className='bg-white w-12 h-0.5'></div>
            Empower Your <br />
            Business <span className='text-[#FFE998]'>Finances</span>
          </h1>

          <span className='text-[#7D7D7D] text-[22px] font-sans font-light'>
          Your Expert Partner in Swift Business Financing, <br />
          Bridging Gaps, and Ensuring Success. Thrive with <br />
          Us!
          </span>

          <div className='flex mt-6 text-[#F0D77B] items-center gap-4'>
          <h1>
          Discover More
          </h1>
          <FaArrowRight />
          </div>
        </div>
      </div>

      <div className='flex-1 relative'>
        <div>
          <img src={image} alt='image' style={{minWidth: '100%', marginLeft: '-12rem', marginTop: '15rem', objectFit: 'cover'}} />

          <div className="absolute flex flex-col top-[36rem] right-[2rem]
          justify-center items-center transform rotate-90 text-center">
            <ul className="list-disc list-inside">
              <div className='flex flex-row list-none gap-10'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              </div>
            </ul>
          </div>
        </div>
        <div className='flex justify-end mr-[12rem] mt-8 gap-4'>
          <FaArrowLeftLong />
          <FaArrowRight />
        </div>
      </div>
    </div>
  )
}
