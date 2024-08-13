import React from 'react'
import { CiSearch } from "react-icons/ci"
import { BiSolidPlaylist } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5"
import { SiSemanticrelease } from "react-icons/si";
import { FaRegPlayCircle } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";

const Sidebar = () => {
    return (
        <div className="w-[25.3%] bg-[#010101] border-r border-gray-600 fixed z-10 py-40 text-center px-5 h-screen ">
            <div>
                <div className="text-white text-xl flex justify-center space-x-2 items-center  hover:border-blue-500 pt-4 pb-4 cursor-pointer">

                    <IoHomeOutline size={30} />
                    <p>Home</p>
                </div>
                <div className="text-white flex justify-center space-x-2 items-center text-[20px] hover:border-blue-500  text-center pt-4 pb-4 cursor-pointer">
                    <CiSearch size={30} />
                    <p>Search</p>
                </div>
                <div className="text-white text-[18px] flex space-x-2 justify-center items-center hover:border-blue-500  pt-4 pb-4 cursor-pointer">
                    <SiSemanticrelease size={30} />
                    <p>New Releases</p>
                </div>
                <div className="text-white text-[18px] flex items-center justify-center space-x-2  border-gray-500 hover:border-blue-500  pt-4 pb-4 cursor-pointer">
                    <FaRegPlayCircle size={30} />
                    <p>Recently Played</p>
                </div>
                <div className="text-white text-[18px]  border-gray-500 flex space-x-2 justify-center items-center hover:border-blue-500  pt-4 pb-4 cursor-pointer">
                    <GiLinkedRings size={30} />
                    <p>Linked Songs</p>
                </div>
                <div className="text-white text-[18px] flex space-x-2 justify-center items-center border-gray-500 hover:border-blue-500  pt-4 pb-4 cursor-pointer">
                    <BiSolidPlaylist size={30} />
                    <p>Your Playlists</p>
                </div>
            </div>
            <div className='flex absolute bottom-1 space-x-24  text-white justify-between place-items-end'>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Sidebar
