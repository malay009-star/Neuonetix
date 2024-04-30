import React from 'react'

function borderCards({ item }) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 lg:mt-0'>
      {item.map((item, index) => (
        <div className={`ps-5 border-l-2 border-[#334d69] flex flex-col pt-4 ${index==0 ? 'sm:border-l-0' : ''}`}>
          <h3 className='sm-title text-[17px]'>{item.title}</h3>
          <p className='pt-6'>{item.info}</p>
        </div>
      ))}
    </div>
  )
}

export default borderCards
