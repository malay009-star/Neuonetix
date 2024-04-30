import React, { useState } from 'react'
import Herosec from '../../component/appDev_component/herosec_ourServices'
import { ourAppHerosection } from '../../component/our_component/our_objects'
import Logo from '../../assets/images/logo.png'


function ourApplication() {

  const [showMore, setShowMore] = useState(false);
  const [showMoretwo, setShowMoretwo] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const toggleShowMoreTwo = () => {
    setShowMoretwo(!showMoretwo);
  };


  return (
    <div>
      {/* hero sec */}
      <div>
        <Herosec item={ourAppHerosection} />
      </div>


      {/* Explore our Applications */}
      <div className="container wrapper">
        <h2 className='title text-center'>Explore our Applications</h2>
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div className='px-4 py-5 bg-light'>
            <div className='sm:flex gap-4'>
              <div className='flex sm:flex-col items-center justify-between lg:pt-24 px-4 py-5 sm:w-[30%] bg-white'>
                <img className='w-32' src={Logo} alt="" />
                <button className='primary-btn' onClick={toggleShowMore}>
                  {showMore ? 'Learn less' : 'Learn more'}
                </button>
              </div>
              <div className='sm:w-[70%] mt-10 sm:mt-0'>
                <h2 className='md-title'>Learn&Connect</h2>
                <p className='text-[13.5px] mt-4'>Elevate administrative communication among students, educators, and parents with our innovative program. Our platform simplifies the daily operations of educational institutions, offering a secure and efficient way for all parties to access and share information seamlessly.<br /><br /> In a rapidly changing educational landscape, we understand the need for efficiency and transparency. Our solution caters to schools, colleges, and universities, replacing traditional communication methods with a more convenient, secure, and streamlined approach.</p>
                <div>
                  {showMore && (
                    <p className='font-semibold mt-6'>Elevate administrative communication among students, educators, and parents with our innovative program.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 py-5 bg-light'>
            <div className='sm:flex gap-4'>
              <div className='flex sm:flex-col items-center justify-between lg:pt-24 px-4 py-5 sm:w-[30%] bg-white'>
                <img className='w-32' src={Logo} alt="" />
                <button className='primary-btn' onClick={toggleShowMoreTwo}>
                  {showMoretwo ? 'Learn less' : 'Learn more'}
                </button>
              </div>
              <div className='sm:w-[70%] mt-10 sm:mt-0'>
                <h2 className='md-title'>Construction</h2>
                <p className='text-[13.5px] mt-4'>Introducing our Construction Manager Communication Software, designed for seamless project communication. It offers individual folder and gallery structures, along with automatic email notifications containing construction site photos.<br /><br /> In the fast-paced world of construction management, effective communication is crucial. Our software simplifies collaboration and information sharing with organized folders and real-time image updates.<br /><br /> Experience efficient construction management with our software – streamline your processes and enhance project transparency today.</p>
                <div>
                  {showMoretwo && (
                    <p className='font-semibold mt-6'>Elevate administrative communication among students, educators, and parents with our innovative program.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default ourApplication
