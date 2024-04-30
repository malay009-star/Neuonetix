import React, { useState } from 'react';

function ReadMoreContent({ text }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <p className='font-semibold py-7'>{showMore ? text : ''}</p>
      <button className='primary-btn' onClick={toggleShowMore}>
        {showMore ? 'Learn less' : 'Learn more'}
      </button>
    </div>
  );
}

export default ReadMoreContent;
