import React from 'react'
import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className=" bg-orange-600 p-4">
            <div className="container mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center">
                {/* Logo */}
                <Link href="/"><img src="/imgFile/logo.png" alt="" className=' h-12 lg:h-28  ml-2'/></Link>

                {/* Navigation Links */}
                <ul className="flex space-x-4">

                    <li className='text-white hover:text-gray-300'>
                        <Link href="/">Home</Link>
                    </li>

                    <li className='text-white hover:text-gray-300'>
                        <Link href="/">About</Link>
                    </li>

                    <li className='text-white hover:text-gray-300'>
                        <Link href="/">Services</Link>
                    </li>

                    <li className='text-white hover:text-gray-300'>
                        <Link href="/">Contact</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
