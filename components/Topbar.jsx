import React from 'react'
import Image from 'next/image'
import { logo } from '@/public'
import { MdAccountCircle } from "react-icons/md";

const Topbar = () => {
    return (
        <div className='h-20 bg-[#000000] border-b border-gray-600 text-white ml-[25vw] fixed w-[75%] z-10 flex items-center justify-between px-10 py-6 '>
            {/* <img src="/public/logo.png" alt="logo" className='w-40 z-20' /> */}
            <Image src={logo} width={0} height={0} className='w-[130px]  z-50' />
            <div className='flex items-center space-x-2'>
                <MdAccountCircle size={40} />
                <p>Login</p>
            </div>
        </div>
    )
}

export default Topbar
