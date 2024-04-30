import React from 'react';

function threeTriangleCards({ item }) {

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-8 lg:gap-16 w-full'>
      <div className='flex flex-col gap-y-8 w-full md:w-2/4'>
        {item.map((item, index) => (
          (index <= 1) ? (
            <div key={index} className={`bg-[#f5f5f5] px-8 md:px-6 lg:px-8 pt-8 pb-16 h-[400px] md:h-[480px] ${index == 0 ? 'pb-20' : ''}`}>
              <h2 className='md-title lg:w-[65%]'>{item.title}</h2>
              <p className='mt-8'>{item.info}</p>
              {item.secondInfo && (
                <p className='mt-4'>{item.secondInfo}</p>
              )}
            </div>
          ) : null))}
      </div>
      <div className='flex lg:items-end w-full md:w-2/4 lg:h-[1250px]'>
        <div className='flex flex-col justify-end gap-y-8'>
          {item.map((item, index) => (
            ((index == 2 || index == 3) ? ( // Changed () to ? here
              <div key={index} className='bg-[#f5f5f5] px-8 md:px-6 lg:px-8 pt-8 pb-16 h-[400px] md:h-[480px]'>
                <h2 className='md-title lg:w-[67%]'>{item.title}</h2>
                <p className='mt-8'>{item.info}</p>
              </div>
            ) : null)
          ))}
        </div>
      </div>
      <div className='flex lg:items-end w-full md:w-2/4 lg:h-[1500px]'>
        <div className='flex flex-col justify-end gap-y-8'>
          {item.map((item, index) => (
            ((index == 4 || index == 5) ? ( // Changed () to ? here
              <div key={index} className='bg-[#f5f5f5] px-8 md:px-6 lg:px-8 pt-8 pb-16 h-[400px] md:h-[480px]'>
                <h2 className='md-title lg:w-[65%]'>{item.title}</h2>
                <p className='mt-8'>{item.info}</p>
              </div>
            ) : null)
          ))}
        </div>
      </div>
    </div>
  );
}

export default threeTriangleCards;
