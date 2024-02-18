import React from 'react'
import dedicated from '../assets/dedicated.png'

const Dedicated = () => {
  return (
    <div className='w-full h-[647px] bg-cover bg-no-repeat bg-center p-[8rem] flex items-center flex-col'
    style={{ backgroundImage: `url(${dedicated})`, color: 'white', objectFit: 'contain' }}>
      <div className='flex font-serif font-normal leading-[69px] text-center text-[50px] items-center justify-center'>
        <h1>
        <span className='text-[#E3B955] font-extrabold'>We are Dedicated</span> to the Expansion <br /> of <span className='text-[#E3B955] font-extrabold'>your Business</span>
        </h1>
      </div>

      <div className='flex p-[4rem] items-center justify-center gap-[2rem]'>
        <button className='flex bg-[#DAA74E] w-[345px] h-[30px] p-[3rem] items-center justify-center font-serif
        leading-[48px] font-medium text-[30px] tracking-[2%]'><h1 className='text-[#906312]'>FOR <span className='text-[#080808]'>INDIVIDUAL</span></h1>
        </button>

        <button className='flex bg-[#DAA74E] w-[345px] h-[30px] p-[3rem] items-center justify-center font-serif
        leading-[48px] font-medium text-[30px] tracking-[2%]'><h1 className='text-[#906312]'>FOR <span className='text-[#080808]'>CORPORATE</span></h1></button>
      </div>

      <div className='w-[250px] h-[30px] contents'>
        <button className='text-[20px] font-sans font-[400] leading-[30px] text-[#F0D77B] border border-solid border-[#F0D77B] px-7 py-2'>
          Let's Connect
        </button>
      </div>
    </div>
  )
}

export default Dedicated