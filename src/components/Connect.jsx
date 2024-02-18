import React from 'react'
import phone from '../assets/Number.png'
import mail from '../assets/Mail.png'
import location from '../assets/location (1) 1.png'
import connect from '../assets/connect.png'
import img1 from '../assets/Media.png'
import img2 from '../assets/image 8.png'
import img3 from '../assets/image 4.png'
import img4 from '../assets/image 5.png'

const Connect = () => {
  return (
    <div className='bg-[#191919] flex justify-center flex-wrap gap-[5rem] w-full h-[858px] p-[5rem]'>
      <div className='flex flex-row items-center gap-[8rem]'>
      <div className='flex-1 flex flex-col gap-[2rem]'>
        <div>
          <h1 className='font-sans font-[700] text-[40px] leading-[65px] text-[#CACACA]'>
          Let's Get In <span className='text-[#FFE998]'>Touch With US</span>
          </h1>
        </div>

        <div className='flex flex-col justify-center gap-[4rem] w-[536px] h-[247px]'>
          <div className='flex items-center gap-5'>
            <img src={phone} alt='phone' style={{width: '21px', height: '17px'}} />
            <h1 className='font-sans font-[300] leading-[16px] text-[#A8A8A8]'>+971-05 44 33 88 66</h1>
          </div>

          <div className='flex items-center gap-5'>
            <img src={mail} alt='phone' style={{width: '21px', height: '17px'}} />
            <h1 className='font-sans font-[300] leading-[16px] text-[#A8A8A8]'>info@unifiedinvestments.ae</h1>
          </div>

          <div className='flex items-center gap-5'>
            <img src={location} alt='phone' style={{width: '24px', height: '24px'}} />
            <h1 className='font-sans font-[300] leading-[24px] text-[#A8A8A8]'>Unified Investments, 2nd floor, Al Amal St - <br />Business Bay-Dubai, United Arab Emirates</h1>
          </div>
        </div>
      </div>

      <div className='pl-[8rem] w-[820px]'>
        <img src={connect} alt='' style={{height: '37rem'}} />
      </div>
    </div>
    <div className='w-[1470px] h-[147px] bg-[#DAA74E]'>
      <div className='flex justify-evenly py-[1.2rem]'>
        <img src={img1} alt='' />
        <img src={img2} alt='' />
        <img src={img3} alt='' />
        <img src={img4} alt='' />
      </div>
    </div>
    </div>
  )
}

export default Connect

