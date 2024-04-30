import React from 'react'

function horizontalCards({ item }) {
  return (
    <div className='flex flex-col gap-12'>
      {item.map((item) => (
        <div className='bg-[#f5f5f5] flex justify-between items-center flex-wrap md:flex-nowrap px-6 md:px-8 py-6 md:h-32'>
          <h2 className="font-black md-color md:w-[18%]">{item.title}</h2>
          <p className='md:w-3/4 mt-3 md:mt-0'>{item.info}</p>
        </div>
      ))}
    </div>
  )
}

export default horizontalCards
