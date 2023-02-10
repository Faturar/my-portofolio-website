import React from 'react'
import Link from 'next/link'

import Loader from '../Loader'
import Navbar from '../Navbar'
import Footer from '../Footer'
import WorkItem from './WorkItem'

// Image
import portfolioAes from '../../public/assets/img/portfolio-aes.png'
import portfolioGym from '../../public/assets/img/portfolio-gym.png'
import portfolioMov from '../../public/assets/img/portfolio-mov.png'
import portfolioPana from '../../public/assets/img/portfolio-pana.png'
import portfolioTokoku from '../../public/assets/img/portfolio-tokoku.png'
import portfolioKemang from '../../public/assets/img/portfolio-smkn1kemang.png'

// Icon
import reactjs from '../../public/assets/icon/reactjs.svg'
import css from '../../public/assets/icon/css.svg'
import html from '../../public/assets/icon/html.svg'
import tailwind from '../../public/assets/icon/tailwind.svg'
import bootstrap from '../../public/assets/icon/bootstrap5.svg'
import codeigniter from '../../public/assets/icon/codeigniter.svg'
import jquery from '../../public/assets/icon/jquery.svg'
import wordpress from '../../public/assets/icon/wordpress.svg'

function work() {
  const data = [
    {
      image: portfolioAes,
      title: 'Aes Shop - Plant Shop Website',
      description: 'Webiste where you can browse and purchase a variety of plants, gardening supplies and tools. It also provide helpful resources, such as plant care guides and information about the different types of plants available.',
      techstack: [
        {
          tech: 'HTML',
          image: html
        },
        {
          tech: 'CSS',
          image: css
        },
        {
          tech: 'Tailwind',
          image: tailwind
        },
        {
          tech: 'React Js',
          image: reactjs
        },
      ],
      link: 'https://aesshop.netlify.app/',
      delay: 1000,
    },
    {
      image: portfolioGym,
      title: 'Fit Body - Gym Webiste',
      description: "Website that provides information about a physical fitness center. It typically includes details about the gym's location, hours of operation, membership options, class schedules, and other services offered.",
      techstack: [
        {
          tech: 'HTML',
          image: html
        },
        {
          tech: 'CSS',
          image: css
        },
        {
          tech: 'React Js',
          image: reactjs
        },
      ],
      link: 'https://react-gym-faturar.netlify.app/',
      delay: 1100,
    },
    {
      image: portfolioMov,
      title: 'Mov Movie - Movie Search Website',
      description: 'Website that allows users to search for and find information about movies, such as title, release date, cast, and plot summary. Users can typically search by keywords and browse by genre or year.',
      techstack: [
        {
          tech: 'HTML',
          image: html
        },
        {
          tech: 'CSS',
          image: css
        },
        {
          tech: 'Tailwind',
          image: tailwind
        },
        {
          tech: 'React Js',
          image: reactjs
        },
      ],
      link: 'https://mov-movie.netlify.app/',
      delay: 1200,
    },
    {
      image: portfolioPana,
      title: 'Pana Hotel - Hotel Landing Page',
      description: 'A hsingle web page specifically designed for promoting a hotel and its services. The purpose is to provide prospective guests with a comprehensive overview of the hotel, its amenities, room types, location, and special offers. The page designed with the user experience in mind and should be easy to navigate, visually appealing, and informative.',
      techstack: [
        {
          tech: 'HTML',
          image: html
        },
        {
          tech: 'CSS',
          image: css
        },
        {
          tech: 'Bootstrap',
          image: bootstrap
        },
      ],
      link: 'https://panahotel.netlify.app/',
      delay: 0,
    },
    {
      image: portfolioTokoku,
      title: 'Tokoku - Store Management System',
      description: 'A shop information system is used to manage the day-to-day operations of a store. The system helps store owners and managers to efficiently manage tasks such as inventory management, sales tracking, financial reporting, and employee management.',
      techstack: [
        {
          tech: 'HTML',
          image: html
        },
        {
          tech: 'CSS',
          image: css
        },
        {
          tech: 'Bootstrap',
          image: bootstrap
        },
        {
          tech: 'Codeigniter 4',
          image: codeigniter
        },
        {
          tech: 'Jquery',
          image: jquery
        },
      ],
      link: 'https://toko.faturar.my.id',
      delay: 100,
    },
    {
      image: portfolioKemang,
      title: 'SMKN 1 Kemang Website',
      description: 'A school website is a digital platform designed to provide information about a school and its programs, facilities, and community to students, parents, staff, and other stakeholders. The main purpose of website is to serve as a hub for communication and information-sharing, and to promote the school mission and values.',
      techstack: [
        {
          tech: 'Wordpress',
          image: wordpress
        },
      ],
      link: 'https://toko.faturar.my.id',
      delay: 200,
    },
  ]

  return (
    <>
      <Loader />
      <Navbar />
      <main className='min-h-screen w-full text-center overflow-hidden'>
        <div className="container mt-28">
          {/* Header */}
          <div className="header" data-aos="fade" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="1000">
            <span className='header-title'>Portfolio</span>
            <h1 className="header-title-main">
              My Project
            </h1>
            <p className='header-description'>
              My portfolio showcases the various projects I have worked on, that I create.
            </p>
          </div>
          
          {/* Main */}
          <div className="flex flex-wrap mt-16">
            {data.map((item, key) => (
                <WorkItem key={key} image={item.image} title={item.title}  description={item.description} techstack={item.techstack} link={item.link}  delay={item.delay} />
              )
            )}
          </div>

          {/* Contact */}
          <section id="contact" className='py-64'>
            <div className="container">
              {/* Header */}
              <div className="header">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
                  <span className='header-title'>Contact</span>
                  <h1 className="header-title-main">
                    Let’s talk about project
                  </h1>
                  <p className='header-description mt-4'>
                    If you want to collaborate with me or get more information about our service, please contact me.
                  </p>
                </div>
                <div className='mt-16 w-full md:w-[360px] flex justify-center md:justify-between flex-wrap'>
                  <Link href={'/contact'} className='btn btn-primary mr-2' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">Contact Now</Link>
                  <button className='btn btn-primary-outline' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="100">Download CV</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default work