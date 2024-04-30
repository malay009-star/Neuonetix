import React from 'react'

function appDevCards({ item }) {
  return (
    <div className='grid md:grid-cols-2 gap-12'>
      {item.map((item, index) => (
        <div key={index} className='bg-[#f5f5f5] px-8 pt-10 pb-16'>
          {item.img
            ? (<div className="mb-10">
              <img className='w-14' src={item.img} alt="" />
            </div>)
            : ''}
          <div>
            <h2 className='md-title lg:w-3/4'>{item.title}</h2>
            <p className='mt-12'>{item.info}</p>
            {item.secondInfo && (
              <p className='mt-4'>{item.secondInfo}</p>
            )}
          </div>
        </div>))}
    </div>
  )
}

export default appDevCards
