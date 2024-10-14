
"use client";
import { Button, Navbar } from "flowbite-react";
import logoImg from '../../assets/images/logo.webp'
import Image from "next/image";

export function NavComponent() {
  return (
    <Navbar fluid rounded className="bg-yellow-300 p-3 shadow-sm shadow-gray-400 z-50 relative">
      <Navbar.Brand href="#">
        <Image src={logoImg} width={40} height={40} objectFit="cover" className="rounded-full mr-4" alt="booknestLogo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book<span className="text-pink-600">Nest</span></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button gradientDuoTone="pinkToOrange" className="mr-2 md:mr-0">Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Fiction</Navbar.Link>
        <Navbar.Link href="#">Motivational</Navbar.Link>
        <Navbar.Link href="#">Spiritual</Navbar.Link>
        <Navbar.Link href="#">Self-Help</Navbar.Link>
        <Navbar.Link href="#">Kids</Navbar.Link>
        <Navbar.Link href="#">Financial</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
