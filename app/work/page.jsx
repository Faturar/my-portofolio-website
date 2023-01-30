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

// Icon
import reactjs from '../../public/assets/icon/reactjs.svg'
import css from '../../public/assets/icon/css.svg'
import html from '../../public/assets/icon/html.svg'
import tailwind from '../../public/assets/icon/tailwind.svg'

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
      link: '#',
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
      link: 'https://mov-movie.web.app/',
      delay: 1200,
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
            {data.map(item => (
                <WorkItem image={item.image} title={item.title}  description={item.description} techstack={item.techstack} link={item.link}  delay={item.delay} />
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
                <div className='mt-16 w-full md:w-[360px] flex justify-center md:justify-between flex-wrap space-y-4 md:space-y-0'>
                  <Link href={'/contact'} className='py-3.5 px-8 btn-primary' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">Contact Now</Link>
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