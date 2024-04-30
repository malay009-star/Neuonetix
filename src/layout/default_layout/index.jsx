import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import { IoMenuOutline } from "react-icons/io5";
import Map from '../../assets/images/Location_blue.png'
import Mail from '../../assets/images/mail_blue.png'
import Phone from '../../assets/images/Phone_blue.png'
import { footerLink } from '../../component/home_component/object_data'
import Instagram from '../../assets/images/Instagram_icon.png'
import Linkedin from '../../assets/images/Linkedin.png'
import X_icon from '../../assets/images/X_icon.png'
import Footerlogo from '../../assets/images/footer_logo.png'
import { useFormik } from 'formik'
import { navitem, initialValues, contactSchema } from '../../layout/schema'
import TabsPages from '.././tabs_pages';
import '../styling/layout.css'


function DefaltLauout({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [subMenuVisibility, setSubMenuVisibility] = useState('')
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.target.closest('.TabsPages')) {
  //       setSubMenuVisibility('');
  //     }
  //   };
  //   document.addEventListener('click', handleClickOutside);
  //   return () => document.removeEventListener('click', handleClickOutside);
  // }, []);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (label) => {
    setSubMenuVisibility(label)
  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  })

  return (
    <div>
      <header className={`flex items-center px-6 md:px-12 min-h-20 shadow-lg bg-white`}>
        <nav className='flex justify-between items-center w-full'>
          <Link to="/"><img className='w-28' src={Logo} alt="" /></Link>
          <ul className={`flex gap-6 lg:gap-14 ${isMenuOpen ? 'open' : ''}`}>
            {navitem.map((item, index) => (
              <li>
                <NavLink
                  to={index === 3 ? item.link : ''}
                  onMouseEnter={() => toggleSubMenu(item.label)}
                  className={`text-sm md:text-[15px] text-[#3a366b] font-semibold ${index === 3 ? 'hover:bg-[#182c47] hover:text-white border border-[#788393] px-3 py-2' : ''}`}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <button className='ms-1 sm:ms-0 menu' onClick={toggleMenu}><IoMenuOutline className='text-[25px] md:text-[26px]' /></button>
        </nav>
      </header>

      {subMenuVisibility !== 'Contact us' && subMenuVisibility && subMenuVisibility !== '' && (
        <div className={`fixed left-0 right-0 ${isScrolled ? 'top-0' : 'top-[83px]'}`} onMouseLeave={() => toggleSubMenu('')}>
          <TabsPages subMenuVisibility={subMenuVisibility} setSubMenuVisibility={setSubMenuVisibility} />
        </div>
      )}



      {/* inner content */}
      {children}



      {/* footer */}
      <footer>
        <div className='bg-[#f5f5f5] pt-24'>
          <div className='container'>
            <div><h3 className='text-2xl primary-color text-center font-bold'>Any questions? Feel free to contact us</h3></div>
            <form onSubmit={handleSubmit} className='w-full lg:w-[70%] mx-auto pt-20 rounded-md'>
              <div className='flex gap-4 flex-wrap md:flex-nowrap mt-2'>
                <div className='w-full md:w-2/4 form-group'>
                  <input className='p-2 py-2 inline-block border border-[#515f74] focus:outline-none w-full text-[#515f74] form-control'
                    type='text'
                    name='company'
                    autoComplete='off'
                    id='company'
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   <label class="form-control-placeholder" for="password">Company...</label>
                  {errors.company && touched.company ? (<p className='font-semibold text-[#DB4444] text-sm'>{errors.company}</p>) : null}
                </div>
                <div className='w-full md:w-2/4 form-group'>
                  <input className='p-2 py-2 inline-block border border-[#515f74] focus:outline-none w-full text-[#515f74] form-control'
                    type='text'
                    name='anrede'
                    autoComplete='off'
                    id='anrede'
                    value={values.anrede}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   <label class="form-control-placeholder" for="password">Anrede...</label>
                  {errors.anrede && touched.anrede ? (<p className='font-semibold text-[#DB4444] text-sm'>{errors.anrede}</p>) : null}
                </div>
              </div>
              <div className='flex gap-4 flex-wrap md:flex-nowrap mt-2'>
                <div className='w-full md:w-2/4 form-group'>
                  <input className='p-2 py-2 inline-block border border-[#515f74] focus:outline-none w-full text-[#515f74] form-control'
                    type='text'
                    name='name'
                    autoComplete='off'
                    id='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   <label class="form-control-placeholder" for="password">Name...</label>
                  {errors.name && touched.name ? (<p className='font-semibold text-[#DB4444] text-sm'>{errors.name}</p>) : null}
                </div>
                <div className='w-full md:w-2/4 form-group'>
                  <input className='p-2 py-2 inline-block border border-[#515f74] focus:outline-none w-full text-[#515f74] form-control'
                    type='email'
                    name='email'
                    autoComplete='off'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   <label class="form-control-placeholder" for="password">E-Mail...</label>
                  {errors.email && touched.email ? (<p className='font-semibold text-[#DB4444] text-sm'>{errors.email}</p>) : null}
                </div>
              </div>
              <div className='mt-2 form-group'>
                <textarea
                  className='w-full p-2 border border-[#515f74] focus:outline-none h-48 form-control'
                  name="description"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                </textarea>
                 <label class="form-control-placeholder textareaLabel" for="password">Message...</label>
                {errors.description && touched.description ? (<p className='font-semibold text-[#DB4444] text-sm'>{errors.description}</p>) : null}
              </div>
              <div className='mt-5'>
                <button type='submit' className='border sm-color font-semibold text-sm border-[#192c4a] w-32 h-10'>Send</button>
              </div>
            </form>
            <div className="flex justify-center py-28">
              <div className='w-full lg:w-2/5 flex items-center justify-center gap-6 flex-wrap md:flex-nowrap
              '>
                <div className='flex items-center gap-x-6 w-full'>
                  <Link to=''><img className='w-6 sm:w-8' src={Mail} alt="" /></Link>
                  <p className=''>info@neuronetix.ch</p>
                </div>
                <div className='flex items-center md:justify-center gap-x-6 w-full'>
                  <Link to=''><img className='w-6 sm:w-8' src={Phone} alt="" /></Link>
                  <p className=''>+41 76 496 43 67</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom footer */}
        <div className='bg-[#182c47] text-[#cdced1]'>
          <div className="container flex justify-between items-baseline flex-wrap md:flex-nowrap gap-2 pt-4 pb-20 w-full">
            <div className="w-full md:w-3/4 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
              {footerLink.map((item) => (
                <div key={item.title}>
                  <h1 className='footerheading'>{item.title}</h1>
                  <ul className='flex flex-col gap-y-1 mt-3'>
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <Link to='' className='footer-link'>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className='w-full md:w-1/4 md:flex md:flex-col md:items-end mt-6 md-mt-0'>
              <div>
                <h2 className='footerheading'>Follow us on our Socials</h2>
                <div className="flex items-center md:justify-between gap-4 mt-5">
                  <Link to=''><img className='w-5' src={Instagram} alt="" /></Link>
                  <Link to=''><img className='w-5' src={Linkedin} alt="" /></Link>
                  <Link to=''><img className='w-5' src={X_icon} alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='container flex items-center justify-between flex-wrap gap-2 border-t py-3'>
            <p className='text-[#cdced1] font-normal'>Copyright © 2024 NeuroNetix GmbH</p>
            <div className='flex items-center gap-4'>
              <Link to='' className='footer-link'>Terms & Conditions</Link>
              <Link to='' className='footer-link'>Privacy Policy</Link>
              <Link to='' className='footer-link'>Legal Notice</Link>
            </div>
            <Link to='/'><img className='w-24' src={Footerlogo} alt="" /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DefaltLauout