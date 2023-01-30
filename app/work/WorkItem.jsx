import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Icon
import reactjs from '../../public/assets/icon/reactjs.svg'
import css from '../../public/assets/icon/css.svg'
import html from '../../public/assets/icon/html.svg'
import tailwind from '../../public/assets/icon/tailwind.svg'

function WorkItem({image, title, description, techstack, link, delay}) {
  return (
    <>
        <div className="w-1/3 flex flex-col justify-start items-start mt-16" data-aos="fade-right" data-aos-duration="1500" data-aos-delay={delay}>
            <div className="mx-4">
                <Image
                    src={image}
                    alt=""
                    height={400}
                />
            </div>

            <div className="mt-8 mx-4">
                <h4 className='text-2xl font-bold text-left text-main'>{title}</h4>
                <p className='mt-4 text-secondary text-left text-base'>{description}</p>
                <div className='mt-3 text-left text-secondary text-base'>
                    <span>Tech Stack:</span>
                    <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                        {techstack.map(item => (
                            <div className='flex'>
                                <Image
                                    src={item.image}
                                    alt=""
                                    height={20}
                                />
                                <span className='ml-2'>{item.tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-12 text-right'>
                    <Link href={link} target={link == '' || link == '#' ? '_top' : '_blank'} className='text-primary hover:text-primary-active transition-all duration-300'>
                        <span className='align-middle text-base font-semibold'>View Demo</span>
                        <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default WorkItem