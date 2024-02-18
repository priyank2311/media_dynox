import React from 'react'

const benefits = [
  {id:1, head: 'High Fixed Returns', describe: 'Build your wealth with a personalised, diversified portfolio with expert advice.'},
  {id:2, head: 'Outperforming Market', describe: 'Earn returns that are greater than the market average with minimal risk and a broader risk profile, we ve proudly been beating the market since 2016 for our clients.'},
  {id:3, head: 'Get Funded', describe: 'Operating under a model of profit sharing, we make money when our investors make money and our success depends on your success.'}
]

const Investor = () => {
  return (
    <div className='w-full h-auto bg-black text-white flex flex-col px-[28rem] py-[6rem] font-sans'>
      <div className='text-[40px] leading-[48px]'>
        <h1 className='font-bold text-[#CACACA]'>INVEST IN <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#F2F2F2] via-[#E3B955] to-[#C59B4F] font-extrabold'
        >DUBAI</span></h1>
      </div>

      <span className='text-[#7D7D7D] w-[1160px] h-[137px] font-light leading-[28.6px] text-[22px]'>
      We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our
      team has the expertise to provide all of our investors with the education, guidance and support required to maximize
      profits both from a short and long-term perspective through their entire investment journey.
      </span>

      <div className='grid grid-cols-3 gap-5 w-[1159px] h-[310px]'>
        {
          benefits.map((item) => {
            return (
              <div key={item.id} className='bg-[#1a1a1a] border-b border-[#E9BD66] border-solid font-serif p-8 pt-[4rem] flex flex-col gap-5 rounded-lg'>
                <h1 className='text-[#EDBF6F] text-[22px] font-medium leading-[22.3px]'>{item.head}</h1>
                <span className='text-[18px] leading-[32px] text-[#7D7D7D]'>{item.describe}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Investor