import React from 'react'
import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className=" bg-orange-200 p-4 mx-1 rounded-2xl mt-2 ">
            <div className="container mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center">
                {/* Logo */}
                <Link href="/"><img src="/imgFile/logo.png" alt="" className=' h-16 sm:h-20 md:h-24 lg:h-28  ml-2'/></Link>

                {/* Navigation Links */}
                <ul className="flex space-x-4">

                    <li className='text-black hover:text-gray-700 text-lg'>
                        <Link href="/">Home</Link>
                    </li>

                    <li className='text-black hover:text-gray-700 text-lg'>
                        <Link href="/">About</Link>
                    </li>

                    <li className='text-black hover:text-gray-700 text-lg'>
                        <Link href="/">Services</Link>
                    </li>

                    <li className='text-black hover:text-gray-700 text-lg'>
                        <Link href="/">Contact</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
