import React from 'react'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png' 
import icon from '../assets/icon.png'
import stars from '../assets/stars.png'

const Testimonial = () => {
  return (
    <div className='bg-black w-full h-[758px] text-white flex justify-between flex-col items-center p-[5rem]'>
      <h1 className='bg-gradient-to-r from-[#FFE998] to-[#57370D] bg-clip-text text-transparent font-[700] text-[40px] leading-[52px]'>TESTIMONIALS</h1>

      <div className='flex items-center gap-[10rem] flex-nowrap'>
        <div className='flex flex-row'>
          <img src={user1} alt='USER' style={{width: '75px', height: '75px'}} />
          <div className='flex flex-col w-[301px] h-[350px]'>
            <div className='flex flex-col pl-[15px] gap-6'>
             <img src={icon} alt='ICON' style={{width: '33px', height: '24.7px'}} />
             <img src={stars} alt='rating' style={{width: '115.6px', height: '27px'}} />
            </div>

            <div className='flex flex-col pl-[15px] w-[300px] text-[20px] font-medium leading-[38px]'>
              <span>
              Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.
              </span>
              <span>Danial H</span>
              <span>CEO GetNextDesign</span>
            </div>
          </div>
        </div>

        <div className='bg-[#E5B96F] w-[3px] h-[260px] '></div>

        <div className='flex flex-row'>
          <img src={user2} alt='USER' style={{width: '75px', height: '75px'}} />
          <div className='flex flex-col w-[301px] h-[350px]'>
            <div className='flex flex-col pl-[15px] gap-6'>
             <img src={icon} alt='ICON' style={{width: '33px', height: '24.7px'}} />
             <img src={stars} alt='rating' style={{width: '115.6px', height: '27px'}} />
            </div>

            <div className='flex flex-col pl-[15px] w-[300px] text-[20px] font-medium leading-[38px]'>
              <span>
              Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.
              </span>
              <span>John H</span>
              <span>Design</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row gap-2'>
        <div className='bg-[#FFF] rounded-full w-2 h-2'></div>
        <div className='bg-[#FFF] rounded-full w-2 h-2'></div>
        <div className='bg-[#FFE998] rounded-full w-2 h-2'></div>
      </div>
    </div>
  )
}

export default Testimonial