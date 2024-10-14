"use client"
import {useState,useEffect} from 'react';
import { Button, Spinner } from 'flowbite-react';
import Image from 'next/image';
import { MdFileDownload } from "react-icons/md";
import { collection,getDocs } from 'firebase/firestore';
import {db} from '../../../../server';
import Link from 'next/link';

export default function NewArrivals() {
  const [books,setBooks]=useState([]);
  const [loading,setLoading]=useState(false);
  const [isError,setError]=useState(false);
  useEffect(()=>{
    const fetchBooks=async()=>{
      setLoading(true);
      try { 
          // get collection
          const colRef=collection(db,'Books');
          const snapshot=await getDocs(colRef);
          const booksData=snapshot.docs.map(doc=>({
            ...doc.data(),
            id:doc.id
          }));
          setBooks(booksData);
          setLoading(false)
      } catch (error) {
        setLoading(false);
        setError(true)
      }finally{
        setLoading(false)
      }
    };
    fetchBooks();
  },[]);
  return (
    <div className='w-11/12 mx-auto pt-10 pb-5'>
        <div>
            <h2 className='text-yellow-400 font-semibold text-xl text-center'>~New Arrivals~</h2>
        </div>
        {/* new arrivals component */}
        {
          loading?(
            <h2 className='text-green-600 bg-cyan-50 p-2 rounded-md w-full border'>
              <span className='mr-3'><Spinner size='sm'/></span>Loading...</h2>
          ):(
            <div className='flex gap-6'>
            {
                books.map(book=>{
                  return(
                  <div key={book.id} className='w-52 mt-5 mb-10 relative border-2 rounded-md bg-white'>
                  <div className='flex justify-center mt-2 h-48'>
                    <Link href={`/books/${book.id}`}>
                    <Image src={book.ImageUrl} 
                      width={130} 
                      height={50} 
                      objectFit='contain' 
                      alt='bookImage'
                      className='hover:scale-105 transition-transform duration-300'
                      />
                    </Link>
                  </div>
                  <Link href={`/books/${book.id}`}>
                  <div className='bg-gray-100 p-2 font-semibold z-50 relative'>
                      <h2 className=' hover:text-yellow-400 cursor-pointer'>Title: <span className='text-sm'>{book.bkTitle}</span></h2>
                      <h2 className='hover:text-yellow-400 cursor-pointer'>Author: <span className='text-sm'>{book.Author}</span></h2>
                  </div>
                  </Link>
                  <MdFileDownload className='absolute text-2xl text-red-500 hover:text-yellow-300 bg-white hover:bg-gray-950 z-50 shadow-sm shadow-gray-200 border rounded-full top-0 right-0 font-semibold'/>
                  <Link href={`/books/${book.id}`}>
                  <Button className='w-full' gradientDuoTone='pinkToOrange' outline>View</Button>
                  </Link>
              </div>
                  )
                })
              }
            </div>
          )
        }
        {
          isError &&(
            <h2 className='text-red-600 bg-pink-200 p-2 border rounded-md w-full'>Failed to load books...</h2>
          )
        }
        <div>
    </div>
    </div>
  )
}


