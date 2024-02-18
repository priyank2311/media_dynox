import React from 'react'
import logo from '../assets/Unified Investment logo.png'
import phone from '../assets/Number.png'
import mail from '../assets/Mail.png'
import linkedin from '../assets/linkdin.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'

const Footer = () => {
  return (
    <div className='w-full h-[544px] bg-black px-[17rem] py-[8rem] flex flex-row justify-evenly'>
      <div className='flex gap-8 flex-col'>
        <img src={logo} alt='logo' style={{width:'273px'}} />
        <div className='w-[285px] h-[96px] flex gap-5 flex-col'>
          <span className='font-sans text-[16px] leading-[25.6px] text-[#F4F4F4]'>
          Interior Design Center Inc. A USA Based Photo Editing Company in Tokyo, Japan. Corporation NO. 524172-2,  Check Here.
          </span>
          <div className='flex gap-4 items-center'>
            <img src={phone} alt='' style={{color: '#B19657', width: '15.5px', height: '14.2px'}} />
            <span className='text-[#FFFFFF] font-normal text-[16px] font-sans'>+88(019)04-000012</span>
          </div>

          <div className='flex gap-4 items-center'>
            <img src={mail} alt='' style={{color: '#B19657', width: '16px', height: '11px'}} />
            <span className='text-[#FFFFFF] font-normal text-[16px] font-sans'>Info.01241588@gmail</span>
          </div>
        </div>
      </div>

      <div className='w-[90px] h-[213px] text-[#F4F4F4] flex flex-col justify-center gap-[2rem]'>
        <h1 className='font-sans text-[20px] font-[700] leading-[32px]'>Menu</h1>
        <ul className='flex flex-col gap-[2rem] text-[16px] font-normal leading-[25.6px] w-[90px] h-[156.5px]'>
          <li>Company</li>
          <li>Investors</li>
          <li>Products</li>
          <li>Journal</li>
          <li>Reach Us</li>
        </ul>
      </div>

      <div className='w-[173px] h-[213px] text-[#F4F4F4] flex flex-col justify-center gap-[2rem]'>
        <h1 className='font-sans text-[20px] font-[700] leading-[32px] flex flex-row'>Useful Link</h1>
        <ul className='flex flex-col gap-[2rem] text-[16px] font-normal leading-[25.6px] w-[173px] h-[156.5px]'>
          <li>Home</li>
          <li>Company</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Return & Refund</li>
        </ul>
      </div>

      <div className='text-[#F4F4F4] flex flex-col justify-start gap-[2rem]'>
        <h1 className='font-sans text-[20px] font-[700] leading-[32px] flex flex-row'>Follow Us</h1>
        <div className='flex flex-row gap-[2rem] text-[16px] font-normal leading-[25.6px] w-[30px] h-[27px]'>
          <img src={insta} alt='instagram' />
          <img src={facebook} alt='facebook' />
          <img src={linkedin} alt='linkedin' />
        </div>
      </div>
    </div>
  )
}

export default Footer