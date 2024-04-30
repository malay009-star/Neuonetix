import React, { useState } from 'react';
import ReadMoreContent from '../readmore_content';
import './solution.css'

function solutionDetails({ item, text }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


  return (
    <div>
      {item.map((item) =>
      (
        <div className='lg:pe-[225px]'>
          <h1 className="title title-color font-bold">{item.title}</h1>
          <div className="solution lg:w-[90%] 2xl:w-[95%]">
            <p className='pt-10'>{item.info}</p>
            {item.secondInfo && (
              <p className=''>{item.secondInfo}</p>
            )}
            <div>
              {text && (
                <ReadMoreContent text={text} />
              )}
            </div>
          </div>
        </div>
      )
      )}
    </div>
  )
}

export default solutionDetails
