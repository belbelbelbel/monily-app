import React from 'react'

const CryptoDashboard = () => {
  return (
    <div className='w-[80%] h-[100%] rounded-[15px] shadow bg-[#1A1B23]'>
        <div className=''>
            {
                Array(5).fill(1).map((_,index) => (
                    <div className='px-2 py-8' key={index}>
                        <div className='h-[1px] w-full bg-white bg-opacity-10'></div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CryptoDashboard