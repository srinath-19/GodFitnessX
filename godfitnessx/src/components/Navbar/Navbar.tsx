import React from 'react'
import logo from 'src/assets/logo.png' 
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <Image src={logo} alt="Logo" />
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/profile'><IoIosBody /></Link>
      
    </div>
  )
}

export default Navbar
