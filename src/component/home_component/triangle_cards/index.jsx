import React from 'react';

function AiSolutions({ item }) {

  return (
    <div className='flex flex-wrap sm:flex-nowrap gap-y-14 sm:gap-[125px] w-full'>
      <div className='flex flex-col gap-y-[55px] w-full sm:w-2/4'>
        {item.map((item, index) => (
          (index <= 1) ? (
            <div key={index} className='bg-[#f5f5f5] px-4 py-5 card'>
              {item.img
                ? (<div className="flex items-center gap-5 px-1 pt-2 mb-10">
                  <img className='w-12 2xl:w-14' src={item.img} alt="" />
                  <h3 className='sm-title'>{item.imgTitle}</h3>
                </div>)
                : ''}
              <div className='px-5'>
                <h2 className='md-title w-3/4 sm:w-[81%] 2xl:w-3/4 pt-5'>{item.title}</h2>
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
      <div className='flex sm:items-end w-full sm:w-2/4 sm:h-[1300px]'>
        <div className='flex flex-col justify-end gap-y-14'>
          {item.map((item, index) => (
            ((index == 2 || index == 3) ? ( // Changed () to ? here
              <div key={index} className='bg-[#f5f5f5] px-4 py-5 card'>
                {item.img
                  ? (<div className="flex items-center gap-5 px-1 pt-2 mb-10">
                    <img className='w-12 2xl:w-14' src={item.img} alt="" />
                    <h3 className='sm-title'>{item.imgTitle}</h3>
                  </div>)
                  : ''}
                <div className='px-5'>
                  <h2 className='md-title w-3/4 sm:w-[81%] 2xl:w-3/4 pt-5'>{item.title}</h2>
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

export default AiSolutions;
