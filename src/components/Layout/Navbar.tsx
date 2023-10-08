"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar= ()=>{
    const [open ,setOpen] = useState(false);
    const navList = [
        {name: "Buy" , link:""},
        {name: "Discover Deals" , link:""},
        {name: "How it works" , link:""},
        {name: "For partners" , link:""},
        {name: "Blog" , link:""},

    ]

    return(
<nav  className="relative bg-white border-b-[1px] border-gray-900 mx-4">
    <div className="container px-6 md:px-20 py-3 mx-auto lg:flex">
        <div className="flex items-center justify-between">
            <Link href="#">
                <Image className="w-auto h-8 sm:h-10" src="/1.png" width={100} height={100} alt="premitto logo"/>
            </Link>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
                <button  onClick={()=> setOpen(!open)} type="button" className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                    {!open ? 
                    <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
            :
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
}
                </button>
            </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={`${open ? 'translate-x-0 opacity-100 h-screen' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 lg:p-0 lg:top-0 lg:relative lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}>
            <div className="flex flex-col px-2 -mx-4 lg:flex-row lg:mx-10 lg:py-0">
                {navList.map(li=> 
                 <Link key={li.name} href={li.link} className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 md:mx-2">{li.name}</Link>

                 )}
                </div>

            <div className="relative mt-4 md:mt-0">
            <button className="px-2.5 py-2 font-normal tracking-wide text-white  transition-colors duration-300 transform bg-[#912980] rounded-lg hover:bg-[#912980] focus:outline-none">
    Become a partner
</button>
              </div>
        </div>
    </div>
</nav>
    )
}

export default Navbar;