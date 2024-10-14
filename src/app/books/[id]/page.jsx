"use client"
import { useEffect,useState } from "react";
import {db} from '../../../../server';
import { doc,getDoc } from "firebase/firestore";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from 'flowbite-react';
import { Spinner } from "flowbite-react";
const bookDetails=()=>{
    const pathname=usePathname();
    const id=pathname.split('/').pop();
    const [book,setBook]=useState(null);
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
        if(id){
            setLoading(true)
            const fetchBookDetails=async ()=>{
                try {
                    const bookDoc=doc(db,'Books',id);
                    const bookSnapshot=await getDoc(bookDoc);
                    if(bookSnapshot.exists()){
                        setBook(bookSnapshot.data())
                        console.log(bookSnapshot.data());
                    }else{
                        setError("Ooops! Book not found!");
                    }
                } catch (error) {
                    setError("Failed to load book details")
                }finally{
                    setLoading(false)
                }
            };
            fetchBookDetails();
        }
    },[id]);

    if(loading){
    return <h2 className="p-2 border bg-green-300 rounded-md mt-10 mb-10 ml-5 mr-5">
        <span className="mr-3"><Spinner size='sm'/></span>Loading...</h2>
}
if(error){
    return <h2 className="p-2 rounded-md border bg-red-300 mt-10 mb-10 ml-5 mr-5">{error}</h2>
}

return (
    <div className="mb-10 mt-10 w-11/12 mx-auto">
        {
        book ? (
        <div className="flex gap-10">
            <div className="flex-2">
            <Image src={book.ImageUrl} width={250} height={250} objectFit="cover"/>
            </div>
            <div className="flex-1">
            <h1 className="text-xl text-gray-950 font-semibold">Title: <span className="text-yellow-400">{book.bkTitle}</span></h1>
            <h2 className="text-xl text-gray-950 font-semibold">Author: <span className="text-yellow-400">{book.Author}</span></h2>
            <h3 className="mt-4 font-semibold text-gray-950">Description:</h3>
            <p className="text-sm">{book.description}</p>
            <div className="flex gap-8 mt-4">
                <h2 className="font-semibold text-gray-950">Pages <span className="text-yellow-400">{book.pages}</span></h2>
                <h3 className="font-semibold text-gray-950">Category <span className="text-yellow-400">{book.category}</span></h3>
            </div>
            <div className="mt-4">
                <Button gradientDuoTone="pinkToOrange">Download Now!</Button>
            </div>
            </div>
        </div>
        ):(
            <h2 className="border bg-red-300 p-2 rounded-md">Ooop! No book Data found!</h2>
        )
    }
    </div>
)
}

export default bookDetails;

