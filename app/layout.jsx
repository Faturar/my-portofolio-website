"use client"

import { useEffect } from 'react';

import './globals.css';
import AOS from 'aos';

import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <html lang="en" style={{scrollBehavior : 'smooth'}}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body className='relative'>
        {children}
      </body>
    </html>
  )
}
