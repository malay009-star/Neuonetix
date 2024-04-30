import React from 'react'

const visionMission = [
  {
    title: 'Innovative Solutions for Labor Challenges',
    info: 'Bringing artificial intelligence to the forefront of business operations is at the heart of what we do at Neuronetix. Our mission is to democratize AI, making it accessible and applicable to companies of all sizes and industries',
    secondInfo: 'We understand the transformative potential of AI in revolutionizing decision-making, automating tasks, and unlocking new opportunities for growth. By providing cutting-edge AI solutions, personalized consultation, and seamless integration, we empower businesses to harness the power of AI to drive innovation, gain competitive advantage, and stay ahead in an ever-evolving marketplace.'
  },
  {
    title: 'Revolutionizing Industries with Artificial intelligence',
    info: 'Our mission at Neuronetix is crystal clear: to tackle the pressing labor challenges encountered by organizations today. We acknowledge the detrimental impact of manpower shortages, skill gaps, and inefficiencies on business growth',
    secondInfo: 'That’s why our dedication is steadfast in crafting tailored solutions that streamline processes, optimize workforce management, and enhance productivity. Through innovative technology and strategic insights, we are committed to alleviating the burden of labor constraints, empowering businesses to sharpen their focus on core objectives and thrive in a fiercely competitive landscape.'
  },
  {
    title: 'Forging a Path to a Brighter Future',
    info: 'At Neuronetix, we envision a future where organizations are empowered through cutting-edge technology solutions. Our vision is to be leading the way in integrating artificial intelligence into businesses, solving labor problems, and driving efficiency, thereby revolutionizing the way industries operate.',
    secondInfo: 'Join us in shaping a future where innovation not only transforms industries but also fosters unprecedented growth, resilience, and global competitiveness for businesses worldwide.'
  }
]



function Vision() {
  return (
    <div className='container grid md:grid-cols-2 gap-x-12 gap-y-24'>
      <div className='flex items-center'>
        <span className='title text-center lg:w-2/3 -ml-1'>Unveiling Our Vision and Mission at Neuronetix</span>
      </div> 
      <div className=''>
        {visionMission.map((item, index) => (
          <div>
            <h3 className='md-title lg:w-[40%]'>{item.title}</h3>
            <p className='pt-10'>{item.info}</p>
            <p className={`pt-4 ${index <=1 ? 'pb-20' : ''}`}>{item.secondInfo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vision
