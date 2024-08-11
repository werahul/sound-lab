import React from "react";

const page = () => {
  return (
    <div className="p-2">
      <div className=" flex items-start justify-center space-x-3">
        <div className="w-[25%] bg-[#010101] h-[86vh] rounded-lg">
          <div className="text-white text-[18px] border-b border-gray-500 hover:border-blue-500  pl-7 pt-4 pb-4 cursor-pointer">
            <p>Home</p>
          </div>
          <div className="text-white text-[18px] border-b border-gray-500 hover:border-blue-500  pl-7 pt-4 pb-4 cursor-pointer">
            <p>Search</p>
          </div>
          <div className="text-white text-[18px] border-b border-gray-500 hover:border-blue-500  pl-7 pt-4 pb-4 cursor-pointer">
            <p>New Release</p>
          </div>
          <div className="text-white text-[18px] border-b border-gray-500 hover:border-blue-500  pl-7 pt-4 pb-4 cursor-pointer">
            <p>Recent Played</p>
          </div>
          <div className="text-white text-[18px] border-b border-gray-500 hover:border-blue-500  pl-7 pt-4 pb-4 cursor-pointer">
            <p>Linked Songs</p>
          </div>
          <div className="text-white text-[18px] border-b border-gray-500 hover:border-blue-500  pl-7 pt-4 pb-4 cursor-pointer">
            <p>Your Playlists</p>
          </div>
        </div>
        <div className="w-[75%] bg-[#010101] h-[86vh] rounded-lg text-white py-7 px-7 overflow-auto">
          <div className="">
            <div className="text-[24px]">
              <p>Best Picks with AI</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-[24px]">
              <p>Best of artists</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              
            </div>
          </div>
          <div className="mt-10">
            <div className="text-[24px]">
              <p>Trending Podcasts</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
              <div className="w-[120px] h-[120px] rounded-lg bg-pink-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#01010179] h-[50px] mt-3 rounded-lg"></div>
    </div>
  );
};

export default page;
