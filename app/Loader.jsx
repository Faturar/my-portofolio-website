"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import loaderGif from '../public/assets/img/loader.gif';

function Loader() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
            <div className="fixed h-screen w-screen bg-white z-[1000]">
                <div className='w-full h-full flex justify-center items-center'>
                <Image
                    src={loaderGif}
                    alt="Logo"
                    width={100}
                    height={100} 
                />
                </div>
            </div>): (<div></div>)
            }
        </>
    )
}

export default Loader