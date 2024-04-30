import React from 'react'
import { NavLink } from 'react-router-dom'


const ourServicesTabs = [
  {
    label: 'Enhancing Efficiency',
    link: '/enhancing_efficiency',
  },
  {
    label: 'Application Development',
    link: '/application_development',
  },
  {
    label: 'Software Maintenance',
    link: '/software_maintenance',
  },
  {
    label: 'Blockchain Technology',
    link: '/blockchain_technology',
  },
  {
    label: 'Software Development',
    link: '/software_development',
  },
  {
    label: 'Website Development',
    link: '/website_development',
  },
  {
    label: 'Artificial Intelligence',
    link: '/artificial_intelligence',
  },
  {
    label: 'Virtual Reality',
    link: '/virtual_reality',
  },
]

const OurApplicationsTabs = [
  {
    label: 'All applications',
    link: '/all_applications',
  },
  {
    label: 'Learn&Connect',
    link: '/learn_&connect',
  },
  {
    label: 'Construction Flow',
    link: '/construction_flow',
  },
]

const DiscoverOurTabs = [
  {
    label: 'Our Journey Begins',
    link: '/our_company',
  },
  {
    label: 'Mission and Vision',
    link: '/mission_vision',
  },
  {
    label: 'What we stand for',
    link: '/we_standfor',
  },
  {
    label: 'Blockchain Technology',
    link: '/blockchain technology',
  },
  {
    label: 'Our Promise for Tomorrow',
    link: '/our_promise',
  },
  {
    label: 'From Vision to Reality',
    link: '/vision_reality',
  },
  {
    label: 'Meet our Founders',
    link: '/our_Founders',
  },
  {
    label: 'Shaping the Future with AI',
    link: '/future_aI',
  },
]



const TabsPages = ({ subMenuVisibility,setSubMenuVisibility }) => {

  const setEmptyTabs = () => {
    setSubMenuVisibility('')
  }



  let tabsData;
  if (subMenuVisibility === 'Our Services') {
    tabsData = { title: 'Our Services', tabs: ourServicesTabs };
  } else if (subMenuVisibility === 'Explore Our Applications') {
    tabsData = { title: 'Our Applications', tabs: OurApplicationsTabs };
  } else if (subMenuVisibility === 'Discover Our Company') {
    tabsData = { title: 'Discover Our Company', tabs: DiscoverOurTabs };
  } else {
    tabsData = { title: '', tabs: [] }; // Default tabs data
  }


  return (
    <div>
      <div className='bg-[#eaecef] h-60 sm:h-44 flex items-center'>
        <div className='container'>
          <nav className='lg:w-3/4'>
            <h1 className='sm-title md-color'>{tabsData.title}</h1>
            <ul className='flex items-center gap-x-10 gap-y-1 sm:gap-y-3 flex-wrap mt-5'>
              {/* Iterate over tabsData.tabs */}
              {tabsData.tabs.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link} className='sm-color font-semibold text-sm'
                    onClick={setEmptyTabs}
                    >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TabsPages;
