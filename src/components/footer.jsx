
"use client";

import { Footer } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsWhatsapp, BsInstagram, BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import logoImg from '../../assets/images/logo.webp'
const currentYear=new Date().getFullYear()
export function FooterComponent() {
  return (
    <Footer container className="bg-yellow-300 text-gray-950 border-2 border-t-gray-300">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex gap-2 h-12 font-semibold">
            <Image src={logoImg} width={40} height={40} className="rounded-full"/>
            <h2 className="my-auto">Book<span className="text-pink-600">Nest</span></h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About US</Footer.Link>
                <Footer.Link href="#">Selling Options</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Twitter X</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="BooksNest™" year={currentYear} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsWhatsapp} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
