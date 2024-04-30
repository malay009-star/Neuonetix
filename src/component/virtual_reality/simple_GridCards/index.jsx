import React from 'react'

function simpleGridCards({item}) {
  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 mt-20'>
        {item.map((item, index) => (
          <div key={index} className='bg-[#f5f5f5] px-10 pt-10 pb-20'>
            <h2 className='md-title lg:w-[68%]'>{item.title}</h2>
            <p className='pt-12'>{item.info}</p>
          </div>))}
      </div>
    </div>
  )
}

export default simpleGridCards
