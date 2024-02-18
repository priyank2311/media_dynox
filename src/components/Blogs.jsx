import React from 'react'
import container from '../assets/Container.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'

const Blogs = () => {
  return (
    <div className='w-full h-auto bg-black text-white flex flex-col gap-8 px-[28rem] py-[8rem]'>
      <div className='text-[40px] leading-[48px] font-sans'>
        <h1 className='font-bold text-[#CACACA]'>OUR <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#F2F2F2] via-[#E3B955] to-[#C59B4F] font-extrabold'>BLOGS</span></h1>
      </div>

      <span className='text-[#7D7D7D] font-sans font-light leading-[28.6px] text-[22px]'>
        We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our
        team has the expertise to provide all of our investors with the education, guidance and support required to maximize
        profits both from a short and long-term perspective through their entire investment journey.
      </span>

      <div className='w-[1161px] h-[615px] flex'>
        <div className='w-[523px] h-[522px] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${container})`, color: 'white' }}>
          <div className='flex gap-12 flex-col p-[5rem]'>
            <div className='flex justify-between'>
              <h1 className='text-[#F0D77B] font-sans font-medium text-[12px] leading-[18px]'>DEVELOPMENT</h1>
              <span className='text-[#999999] font-medium text-[12px] leading-[18px]'>11March 2023</span>
            </div>

            <h1 className='font-medium text-[22px] font-serif leading-[31.99px] text-[#C4C4C4]'>
            Best Website to research for your next project
            </h1>

            <span className='text-[#C4C4C4] font-sans font-light text-[16px] leading-[24px]'>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs
            </span>

            <h1 className='text-[#F0D77B] font-sans font-[600] leading-[20.8px] text-[16px]'>
              Read More...
            </h1>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div className='w-[319px] h-[261px] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${img1})`, color: 'white' }}></div>

          <div className='w-[319px] h-[261px] bg-[#2d2c2c]'>
          <div className='flex flex-col p-[2rem] gap-4'>
            <div className='flex justify-between'>
              <h1 className='text-[#F0D77B] font-sans font-medium text-[10px] leading-[15px]'>DEVELOPMENT</h1>
              <span className='text-[#999999] font-medium text-[10px] leading-[15px]'>11March 2023</span>
            </div>

            <h1 className='font-medium text-[16px] font-serif leading-[20px] text-[#C4C4C4]'>
            Best Website to research for your next project
            </h1>

            <span className='text-[#C4C4C4] font-sans font-light text-[12px] leading-[18px]'>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs
            </span>

            <h1 className='text-[#F0D77B] font-sans font-[600] leading-[15.6px] text-[12px]'>
              Read More...
            </h1>
          </div>
          </div>

          <div className='w-[319px] h-[261px] bg-[#2d2c2c] mb-[6rem]'>
          <div className='flex flex-col p-[2rem] gap-4'>
            <div className='flex justify-between'>
              <h1 className='text-[#F0D77B] font-sans font-medium text-[10px] leading-[15px]'>DEVELOPMENT</h1>
              <span className='text-[#999999] font-medium text-[10px] leading-[15px]'>11March 2023</span>
            </div>

            <h1 className='font-medium text-[16px] font-serif leading-[20px] text-[#C4C4C4]'>
            Best Website to research for your next project
            </h1>

            <span className='text-[#C4C4C4] font-sans font-light text-[12px] leading-[18px]'>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs
            </span>

            <h1 className='text-[#F0D77B] font-sans font-[600] leading-[15.6px] text-[12px]'>
              Read More...
            </h1>
          </div>
          </div>

          <div className='w-[319px] h-[261px] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${img2})`, color: 'white' }}></div>

          <div className='w-[250px] h-[30px]'>
            <button className='text-[20px] font-sans font-[400] leading-[30px] text-[#F0D77B] border border-solid border-[#F0D77B] px-7 py-2'>
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs