import React from 'react'
import Loader from '../Loader'
import Navbar from '../Navbar'
import Footer from '../Footer'

function services() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className='h-screen w-full text-center overflow-hidden'>
        <div className="container flex flex-col mt-36">
          {/* Header */}
          <div className="flex flex-col items-center header text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
              <span className='text-primary font-bold text-lg'>Services</span>
              <h1 className="text-[40px] leading-tight md:leading-normal font-bold text-main">
                Under Construction
              </h1>
              <p className='text-secondary text-lg text-center md:max-w-[520px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, repellendus! Fugiat, labore.
              </p>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default services