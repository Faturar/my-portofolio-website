"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import { useState } from 'react';

import logo from '../public/assets/img/logo.jpg';

function Navbar() {
  const pathName = usePathname()

  const [toggle, setToggle] = useState(false);
    
  return (
    <nav className='container  flex md:flex-row justify-between items-center py-4 mx-auto relative' data-aos="fade-down" data-aos-duration="1600" data-aos-delay="800">
      <div className={`-ml-6 left-8`}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80} 
          />
        </Link>
      </div>
      {/* links */}
      <div className={`${toggle ? 'top-28 left-0 transition-all md:transition-none' : 'top-24 -left-[800px]'} bg-white flex md:top-0 md:left-0 absolute flex-col md:flex-row md:justify-end items-center w-full h-screen md:h-full md:relative  md:bg-transparent md:space-x-12 duration-700 ease-in-out delay-150 md:transition-none text-main-text z-[99] `}>

        {/* Home link */}
        <Link href="/" className={`${toggle ? 'pl-8 transition-all md:transition-none' : 'pl-0'} ${pathName == '/' ? 'text-primary' : 'text-main'} link-item md:pl-0`}>
          <i className='bx bx-home text-2xl md:text-xl align-middle'></i>
          <span className='ml-4 md:ml-2 text-xl md:text-base align-middle'>Home</span>
        </Link>

        {/* Work link */}
        <Link href="/work" className={`${toggle ? 'pl-8 transition-all md:transition-none' : 'pl-0'}  ${pathName == '/work' ? 'text-primary' : 'text-main'} link-item`}>
          <i className='bx bx-briefcase text-2xl md:text-xl align-middle'></i>
          <span className='ml-4 md:ml-2 text-xl md:text-base align-middle'>Work</span>
        </Link>

        {/* Services link */}
        <Link href="/services" className={`${toggle ? 'pl-8 transition-all md:transition-none' : 'pl-0'}  ${pathName == '/services' ? 'text-primary' : 'text-main'} link-item`}>
          <i className='bx bx-wrench text-2xl md:text-xl align-middle'></i>
          <span className='ml-4 md:ml-2 text-xl md:text-base align-middle'>Services</span>
        </Link>

        {/* About link */}
        <Link href="/about" className={`${toggle ? 'pl-8 transition-all md:transition-none' : 'pl-0'} ${pathName == '/about' ? 'text-primary' : 'text-main'} link-item`}>
          <i className='bx bx-user text-2xl md:text-xl align-middle'></i>
          <span className='ml-4 md:ml-2 text-xl md:text-base align-middle'>About</span>
        </Link>

        {/* Contact link */}
        <Link href="/contact" className={`${toggle ? 'pl-8 transition-all md:transition-none' : 'pl-0'} ${pathName == '/contact' ? 'text-primary' : 'text-main'} link-item`}>
          <i className='bx bx-message-rounded-dots text-2xl md:text-xl align-middle'></i>
          <span className='ml-4 md:ml-2 text-xl md:text-base align-middle'>Contact</span>
        </Link>
      </div>
      {/* burger */}
      <button type='button' onClick={() => setToggle(!toggle)} className='block md:hidden'>
        <i className={`bx ${toggle ? 'bx-x' : 'bx-menu'} text-4xl mt-[2px]`}></i>
      </button>
    </nav>
  )
}

export default Navbar