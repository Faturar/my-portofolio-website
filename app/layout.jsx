"use client"

import { useEffect } from 'react';
import { Mulish } from '@next/font/google'

import './globals.css';
import AOS from 'aos';

import "aos/dist/aos.css";

const mulish = Mulish({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-PEBNGZBZR6');
  }, []);

  return (
    <html lang="en" style={{scrollBehavior : 'smooth'}}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body className={`${mulish.className} relative`}>
        {children}

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PEBNGZBZR6"></script>
      </body>
    </html>
  )
}
