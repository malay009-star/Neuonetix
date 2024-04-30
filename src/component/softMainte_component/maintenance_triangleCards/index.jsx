import React from 'react';

function simpleTriangleCards({ item }) {

  return (
    <div className='flex flex-wrap sm:flex-nowrap gap-8 sm:gap-16 w-full'>
      <div className='flex flex-col gap-y-8 w-full sm:w-2/4'>
        {item.map((item, index) => (
          (index <= 1) ? (
            <div key={index} className={`bg-[#f5f5f5] px-3 pt-8 pb-16 w-full ${index==0 ? 'pb-20' : ''}`}>
              <div className='md:px-4'>
                <h2 className='md-title lg:w-3/4'>{item.title}</h2>
                <p className='mt-8'>{item.info}</p>
                {item.secondInfo && (
                  <p className='mt-4'>{item.secondInfo}</p>
                )}
                {item.thirdInfo && (
                  <p className='mt-4'>{item.secondInfo}</p>
                )}
              </div>
            </div>
          ) : null))}
      </div>
      <div className='flex sm:items-end w-full sm:w-2/4 sm:h-[900px] lg:h-[1045px]'>
        <div className='flex flex-col justify-end gap-y-8'>
          {item.map((item, index) => (
            ((index == 2 || index == 3) ? ( // Changed () to ? here
              <div key={index} className='bg-[#f5f5f5] px-3 pt-8 pb-16 w-full'>
                <div className='md:px-4'>
                  <h2 className='md-title lg:w-3/4'>{item.title}</h2>
                  <p className='mt-8'>{item.info}</p>
                  {item.secondInfo && (
                    <p className='mt-4'>{item.secondInfo}</p>
                  )}
                  {item.thirdInfo && (
                    <p className='mt-4'>{item.secondInfo}</p>
                  )}
                </div>
              </div>
            ) : null)
          ))}
        </div>
      </div>
    </div>
  );
}

export default simpleTriangleCards;
