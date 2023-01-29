import { Mulish } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import './globals.css'
import('tailwindcss').Config

// image
import main from '../public/assets/img/main.svg'
import reactjs from '../public/assets/icon/reactjs.svg'
import css from '../public/assets/icon/css.svg'
import html from '../public/assets/icon/html.svg'
import tailwind from '../public/assets/icon/tailwind.svg'
import portfolioAes from '../public/assets/img/portfolio-aes.png'
import portfolioGym from '../public/assets/img/portfolio-gym.png'
import portfolioMov from '../public/assets/img/portfolio-mov.png'
import serviceHtml from '../public/assets/img/service-html.png'
import serviceReact from '../public/assets/img/service-react-next.png'
import serviceWordpress from '../public/assets/img/service-wordpress.png'
import Loader from './Loader'
import Navbar from './Navbar'
import Footer from './Footer'

const mulish = Mulish({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className={`${mulish.className} overflow-hidden`}>
        {/* Header */}
        <section id="header">
          <div className="container">
            <div className="flex relative">
              <div className='py-24 md:py-32' data-aos="fade-right" data-aos-duration="1600" data-aos-delay="1000">
                <span className='text-primary font-bold text-lg md:text-xl'>Hello Everyone <span className='animate-wave inline-block w-8'>👋</span>, I'm</span>
                <h1 className="text-[48px] leading-tight md:leading-normal font-bold text-main mt-2 md:mt-3">
                  Fatur Ardiansyah Ramadhan
                </h1>
                <h2 className='text-secondary text-xl md:text-2xl mt-3'>Web Developer</h2>
                <p className='text-secondary text-lg md:text-xl mt-4 md:max-w-[640px]'>
                  I'm a self-taught developer who loves to learn about coding, design, and exploring new things in depth.
                </p>
                <div className='mt-16'>
                  <Link href={'/contact'} className='btn btn-primary'>Contact</Link>
                </div>
              </div>
              <div className='absolute hidden xl:block -right-28 top-12' data-aos="fade-left" data-aos-duration="1600" data-aos-delay="1000">
                <Image
                  src={main}
                  alt="Logo"
                  width={800}
                />
              </div>
            </div>
            <div className="p-0 animate-bounce" data-aos="fade-up" data-aos-duration="1600" data-aos-delay="1100" data-aos-offset="-200">
              <i className='bx bx-down-arrow-alt py-2 px-3 text-lg border border-secondary rounded-full'></i>
            </div> 
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <div className="container flex flex-col mt-28">

            {/* Header */}
            <div className="flex flex-col items-center header text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
              <span className='text-primary font-bold text-md md:text-lg'>Portfolio</span>
              <h1 className="text-4xl md:text-[40px] leading-tight md:leading-normal font-bold text-main">
                Selected Project
              </h1>
              <p className='text-secondary text-md md:text-lg text-center md:max-w-[520px]'>
                My portfolio showcases the various projects I have worked on, that I create.
              </p>
            </div>

            {/* Items */}
            <div className="flex flex-col md:flex-row items-center mt-20">
              <div className="flex-1" data-aos="fade-right" data-aos-duration="1500">
                <Image
                  src={portfolioAes}
                  alt="Logo"
                  height={400}
                />
              </div>

              <div className="flex-1 mt-8 md:mt-0 md:pl-20" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="300">
                <h4 className='text-2xl md:text-3xl font-bold text-main'>Aes Shop - Plant Shop Website</h4>
                <p className='mt-4 text-secondary text-md md:text-lg'>Webiste where you can browse and purchase a variety of plants, gardening supplies and tools. It also provide helpful resources, such as plant care guides and information about the different types of plants available.</p>
                <div className='mt-3 text-secondary text-md md:text-lg'>
                  <span>Tech Stack:</span>

                  {/* Tech stack */}
                  <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                    <div className='flex'>
                      <Image
                        src={html}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>HTML</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={css}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>CSS</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={tailwind}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>Tailwind</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={reactjs}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>React Js</span>
                    </div>
                  </div>
                </div>
                <div className='mt-12'>
                  <Link href="#" className='text-primary hover:text-primary-active transition-all duration-300'>
                    <span className='align-middle text-md md:text-lg font-semibold'>View Demo</span>
                    <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center mt-16">
              <div className="flex-1" data-aos="fade-right" data-aos-duration="1500">
                <Image
                  src={portfolioGym}
                  alt="Logo"
                  height={400}
                />
              </div>

              <div className="flex-1 mt-8 md:mt-0 md:pl-20" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="300">
                <h4 className='text-2xl md:text-3xl font-bold text-main'>Fit Body - Gym Webiste</h4>
                <p className='mt-4 text-secondary text-md md:text-lg'>Website that provides information about a physical fitness center. It typically includes details about the gym's location, hours of operation, membership options, class schedules, and other services offered.</p>
                <div className='mt-3 text-secondary text-md md:text-lg'>
                  <span>Tech Stack:</span>
                  <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                    <div className='flex'>
                      <Image
                        src={html}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>HTML</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={css}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>CSS</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={reactjs}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>React Js</span>
                    </div>
                  </div>
                </div>
                <div className='mt-12'>
                  <Link href="https://react-gym-faturar.netlify.app/" target="_blank" className='text-primary hover:text-primary-active transition-all duration-300'>
                    <span className='align-middle text-md md:text-lg font-semibold'>View Demo</span>
                    <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-center mt-16">
              <div className="flex-1" data-aos="fade-right" data-aos-duration="1500">
                <Image
                  src={portfolioMov}
                  alt="Logo"
                  height={400}
                />
              </div>

              <div className="flex-1 mt-8 md:mt-0 md:pl-20" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="300">
                <h4 className='text-2xl md:text-3xl font-bold text-main'>Mov Movie - Movie Search Website</h4>
                <p className='mt-4 text-secondary text-md md:text-lg'>Website that allows users to search for and find information about movies, such as title, release date, cast, and plot summary. Users can typically search by keywords, browse by genre or year, and view trailers and reviews.</p>
                <div className='mt-3 text-secondary text-md md:text-lg'>
                  <span>Tech Stack:</span>
                  <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                    <div className='flex'>
                      <Image
                        src={html}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>HTML</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={css}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>CSS</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={tailwind}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>Tailwind</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={reactjs}
                        alt=""
                        height={20}
                      />
                      <span className='ml-2'>React Js</span>
                    </div>
                  </div>
                </div>
                <div className='mt-12'>
                  <Link href="https://mov-movie.web.app/" target="_blank" className='text-primary hover:text-primary-active transition-all duration-300'>
                    <span className='align-middle text-md md:text-lg font-semibold'>View Demo</span>
                    <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className='flex justify-center mt-28' data-aos="fade-up" data-aos-duration="1500" data-aos-offset="200">
              <Link href={'/work'} className='btn btn-primary'>View All Work</Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className='bg-primary-light w-full h-full mt-48 py-28'>
          <div className="container">
            {/* Header */}
            <div className="flex flex-col items-center header text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
              <span className='text-primary font-bold text-md md:text-lg'>Services</span>
              <h1 className="text-4xl md:text-[40px] leading-tight md:leading-normal font-bold text-main">
                Help convert your design
              </h1>
              <p className='text-secondary text-md md:text-lg text-center md:max-w-[520px]'>
                Service that takes a design and converts it into functioning code for a website or application. 
              </p>
            </div>

            <div className="flex flex-col md:flex-row mt-16 text-white">
              <div className="flex-1 bg-primary p-8 md:mr-3 mb-4 md:mb-0 rounded" data-aos="fade-up" data-aos-duration="1500">
                <Image
                  src={serviceHtml}
                  alt="Logo"
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-xl md:text-2xl font-bold'>Design to HTML</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
              <div className="flex-1 bg-primary p-8 md:mx-3 mb-4 md:mb-0 rounded" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" data-aos-offset="100">
                <Image
                  src={serviceReact}
                  alt="Logo"
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-xl md:text-2xl font-bold'>Design to React JS / Next JS</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
              <div className="flex-1 bg-primary p-8 md:ml-3 rounded" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" data-aos-offset="200">
                <Image
                  src={serviceWordpress}
                  alt="Logo"
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-xl md:text-2xl font-bold'>Design to Wordpress</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section id="contact" className='py-64'>
          <div className="container">
            {/* Header */}
            <div className="flex flex-col items-center header text-center">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
                <span className='text-primary font-bold text-md md:text-lg'>Contact</span>
                <h1 className="text-4xl md:text-[40px] leading-tight md:leading-normal font-bold text-main">
                  Let’s talk about project
                </h1>
                <p className='text-secondary text-md md:text-lg text-center md:max-w-[520px] mt-4'>
                  If you want to collaborate with me or get more information about our service, please contact me.
                </p>
              </div>
              <div className='mt-16'>
                <Link href={'/contact'} className='py-4 px-8 btn-primary mr-6' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">Contact Now</Link>
                <button className='btn btn-primary-outline' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="100">Download CV</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
