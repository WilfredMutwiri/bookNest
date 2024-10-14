"use client"
import {Button} from 'flowbite-react'
import Image from 'next/image';
import banner1 from '../../assets/images/Banner1.webp'
import banner2 from '../../assets/images/banner2.webp'
import banner3 from '../../assets/images/banner3.webp'
import banner4 from '../../assets/images/banner4.png'
import NewArrival from '../app/pages/newArrival/page';
import Trending from '../app/pages/trending/page'
import { useState,useEffect } from 'react';
export default function Home() {
  const homeBannerImages=[banner1,banner2,banner3,banner4];
  return (
    <div>
      {/* home header banner section */}
      <header>
        <div className=''>
        <div>
      <Image src={banner4} width='100%' height='400px' objectFit='cover' alt='banner Image'/>
      <div className='bg-black relative inset-0 bg-opacity-50 z-10 w-full h-[700px] -mt-[700px]'>
      </div>
      <div className='absolute inset-0 z-50 pt-56 font-semibold text-white'>
        <h2 className='text-center text-5xl'>Welcome to Book<span className='text-yellow-300'>Nest</span></h2>
        <h3 className='text-2xl italic text-yellow-300 text-center pt-4'>~Your Learning Partner~</h3>
        <div className='flex flex-row gap-5 justify-center pt-10'>
          <Button className='w-36' gradientDuoTone='greenToBlue' outline>Join Us</Button>
          <Button gradientDuoTone='greenToBlue' outline className='w-36'>View Books</Button>
        </div>
      </div>
      </div>
      </div>
      </header>
      <main>
        <div>
        <section>
          {/* new Arrivals section */}
          <NewArrival/>
        </section>
        </div>
        <div>
          {/* Trending books section*/}
          <Trending/>
        </div>
      </main>
    </div>
  );
}
