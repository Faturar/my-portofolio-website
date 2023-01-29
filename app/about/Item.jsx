import React from 'react'
import Image from 'next/image'

function Item({image, title, category, level, addonClass, offset, delay}) {
  return (
    <div className="w-full md:w-1/4 text-left" data-aos="fade-up" data-aos-duration="1500" data-aos-offset={offset != null ? offset : ''} data-aos-delay={delay != null ? delay : ''}>
        <div className='flex flex-col ml-4 mb-4 p-8 border border-secondary rounded'>
            <div className={`flex ${addonClass != null ? addonClass : ''}`}>
            <Image
                src={image}
                alt=""
                height={80}
            />
            </div>
            <div className='flex justify-between items-end mt-8'>
            <div className=''>
                <span className='text-secondary'>{category}</span>
                <h4 className='text-[20px] text-main mt-2'>{title}</h4>
            </div>
            <div className='flex space-x-1'>
                {skillItem(level)}
            </div>
            </div>
        </div>
        </div>
  )
}

function skillItem(level) {

    if(level == 1) {
        return (
            <>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
            </>
        )
    } else if(level == 2) {
        return (
            <>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
            </>
        )
    } else if(level == 3) {
        return (
            <>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
            </>
        )
    } else if(level == 4) {
        return (
            <>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-secondary rounded'></span>
            </>
        )
    } else {
        return (
            <>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
                <span className='w-1.5 h-6 bg-primary rounded'></span>
            </>
        )
    }
    
}

export default Item