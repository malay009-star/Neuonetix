import React, { useEffect, useState } from 'react'
import Triangle_Cards from '../../component/home_component/triangle_cards'
import { AiCards } from '../../component/home_component/triangle_data'
import SolutionDetails from '../../component/home_component/left_details'
import { AiSolutionsData } from '../../component/home_component/solution_object'
import OtherServicesDetails from '../../component/home_component/other_services'
import { otherServicesData, securityTypes, whyChoosUsData, developmentTypes } from '../../component/home_component/object_data'
import Vision from '../../component/home_component/vision_mission'
import ReadMoreContent from '../../component/home_component/readmore_content'
import './home.css'


function home() {

  return (
    <div>
      {/* hero section */}
      <div className='hero_sec bg-img h-[90vh] sm:h-[930px] pt-44 sm:pt-80'>
        <div className='container'>
          <h1 className='title w-full lg:w-[65%] typing-animation'>
            We help you transform your challenges into solutions!
          </h1>
        </div>
      </div>


      {/* Development Categories */}
      <div className='container flex flex-col items-center pt-[120px]'>
        <div className="w-full lg:w-[90%] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-16">
          {developmentTypes.map((item) => (
            <div className='services_flex'>
              <img className='h-32' src={item.img} alt="" />
              <h5 className='sm-title mt-4'>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>


      {/* Delivering Business */}
      <div className='container flex items-center justify-between flex-wrap lg:flex-nowrap wrapper'>
        <div className='w-full lg:w-[45%]'>
          <SolutionDetails item={AiSolutionsData} text='Artificial intelligence is the science of making machines that can think like humans. It can do things that are considered "smart.' />
        </div>
        <div className='w-full lg:w-[55%] mt-20 lg:mt-0'>
          <Triangle_Cards item={AiCards} />
        </div>
      </div>


      {/* other services */}
      <div className="homeOverlay pb-[197px] md:pb-[375px]">
        <div className="container">
          <div><h1 className='text-center title'>Our other Services</h1></div>
          <div className='lg:px-16 pt-28'>
            <OtherServicesDetails item={otherServicesData} readmore='text' />
          </div>
        </div>
      </div>


      {/* our vision and mission */}
      <div className="bg-[#f5f5f5] pb-[187.5px]">
        <Vision />
      </div>


      {/* cyber security */}
      <div className='container pt-[187.5px]'>
        <h1 className='title lg:w-[46%] 2xl:w-[40%]'>Elevating Cybersecurity Beyond Standards</h1>
        <div className='cybersecurity_sec lg:w-[60%] 2xl:w-[65%]'>
          <p className='md-info pt-10'>Our dedicated cybersecurity team diligently safeguards our software and your data. We place a paramount emphasis on staying ahead of dynamic threats through ongoing updates and proactive research initiatives.<br /><br /> Routine security audits serve to fortify our defenses, and our unwavering commitment to excellence propels us beyond industry norms. You can rely on us to deliver a secure digital environment, setting elevated benchmarks in the realm of cybersecurity.</p>
          <div className=''>
            <ReadMoreContent text='Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.' />
          </div>
        </div>
        <div className='pt-24 2xl:pt-28 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {securityTypes.map((item, index) => (
            <div className={`${index < 2 ? 'md:border-r-2 border-[#182c47]' : ''}`}>
              <h3 className='md-title w-3/4 sm:h-20'>{item.title}</h3>
              <p className='pt-6 md:w-[85%]' >{item.info}</p>
            </div>
          ))}
        </div>
      </div>


      {/* why choose us */}
      <div className="container wrapper">
        <div><h1 className='text-center title'>Why choose us?</h1></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-11 2xl:gap-x-16 gap-y-16 2xl:gap-y-20 mt-28">
          {whyChoosUsData.map((item) => (
              <div className='flex items-start gap-5'>
                <div><img className='w-36 2xl:w-40' src={item.img} alt="" /></div>
                <div>
                  <h3 className="w-4/5 sm:w-3/4 md-title">{item.title}</h3>
                  <p className='pt-4'>{item.info}</p>
                </div>
              </div>
          ))}
        </div>
      </div>



    </div>
  )
}

export default home