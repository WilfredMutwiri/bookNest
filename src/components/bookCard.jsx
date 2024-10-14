import { Button } from 'flowbite-react';
import book1 from '../../assets/images/AtomicHabits2.webp'
import Image from 'next/image';
import { MdFileDownload } from "react-icons/md";
export default function BookCard({book}) {
  return (
    <div className='w-52 mt-5 mb-10 relative border-2 rounded-md bg-white'>
        <div className='flex justify-center mt-2'>
            <Image src={book.ImageUrl} 
            width={130} 
            height={50} 
            objectFit='cover' 
            alt='bookImage'
            className='hover:scale-105 transition-transform duration-300'
            />
        </div>
        <div className='bg-gray-100 p-2 mt-2 font-semibold'>
            <h2 className=' hover:text-yellow-400 cursor-pointer'>Title: <span className='text-sm'>{book.bkTitle}</span></h2>
            <h2 className='hover:text-yellow-400 cursor-pointer'>Author: <span className='text-sm'>{book.Author}</span></h2>
        </div>
        <MdFileDownload className='absolute text-2xl text-red-500 hover:text-yellow-300 bg-white hover:bg-gray-950 z-50 shadow-sm shadow-gray-200 border rounded-full top-0 right-0 font-semibold'/>
        <Button className='w-full' gradientDuoTone='pinkToOrange' outline>View</Button>
    </div>
  )
}
