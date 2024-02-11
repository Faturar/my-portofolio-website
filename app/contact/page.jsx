import React from 'react'
import Link from 'next/link'

import { FiMail, FiPhone, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

import Loader from '../Loader'
import Navbar from '../Navbar'
import Footer from '../Footer'

function contact() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className='min-h-screen w-full overflow-hidden'>
        <div className="container flex flex-col lg:flex-row-reverse gap-24 mt-0 mb-36 lg:my-36">
          {/* Header */}
          <div className="basis-7/12 flex flex-col justify-between my-20 w-full" data-aos="fade" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="1000">
            <div>
              <span className='header-title'>Contact</span>
              <h1 className="header-title-main">
                Any project in mind? 
              </h1>
              <p className='header-description max-w-full text-start mt-3'>
                Let's chat and turn your vision into reality. Whether you're seeking creative solutions, have questions, or want to collaborate, we’re here to listen. Reach out today!
              </p>
              <div>
                <div className="flex gap-3 items-center mt-8 mb-4">
                  <FiPhone className='text-2xl text-primary' />
                  <Link href={':'} target='blank' className='font-medium text-lg'>
                    +62812121212
                  </Link>
                </div>
                <div className="flex gap-3 items-center mb-4">
                  <FiMail className='text-2xl text-primary' />
                  <Link href={'mailto:faturardev@gmail.com'} className='font-medium text-lg'>
                    faturardev@gmail.com
                  </Link>
                </div>
            </div>
            </div>

            <div className='mt-16'>
              <h4 className='text-2xl font-bold'>Social Media</h4>
              <div className="flex gap-6 mt-4">
                <Link href={'https://www.instagram.com/faturar.dev/'} target='blank'>
                  <FiInstagram className='text-3xl text-primary' />
                </Link>
                <Link href={'https://www.linkedin.com/in/faturar/'} target='blank'>
                  <FiLinkedin className='text-3xl text-primary' />
                </Link>
                <Link href={'https://www.facebook.com/faturarrr/'} target='blank'>
                  <FiFacebook className='text-3xl text-primary' />
                </Link>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="basis-5/12 w-full py-8 px-6 md:py-12 md:px-8 rounded-md shadow-lg" data-aos="fade" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="200">
            <h2 className='mb-6 text-2xl font-bold'>Send Me A Quite:</h2>
            <form action="" className="flex flex-col"> 
              <div className="flex flex-col items-start gap-3 mb-6">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='w-full bg-slate p-3 rounded-lg outline-primary' placeholder='Name' />
              </div>
              <div className="flex flex-col items-start gap-3 mb-6">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id='phone' className='w-full bg-slate p-3 rounded-lg outline-primary' placeholder='Phone Number' />
              </div>
              <div className="flex flex-col items-start gap-3 mb-6">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' className='w-full bg-slate p-3 rounded-lg outline-primary' placeholder='Email' />
              </div>
              <div className="flex flex-col items-start gap-3 mb-6">
                <label htmlFor="phone">Message</label>
                <textarea id='phone' className='w-full bg-slate p-3 rounded-lg outline-primary' placeholder='Message'></textarea>
              </div>
              <div className='mt-3 w-full md:w-[360px] flex justify-start flex-wrap'>
                <Link href={'/contact'} className='btn btn-primary mr-2' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">Submit</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default contact