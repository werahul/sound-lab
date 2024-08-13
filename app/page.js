import Topbar from "@/components/Topbar";
import Layout from "@/hoc/Layout";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Layout>
        <Topbar />
        <div className="w-[75.75%] ml-[24vw] space-x-3">
          <div className=" bg-[#010101] pt-32 h-[120vh] text-white px-14 overflow-auto">
            <div className="">
              <div className="text-[24px]">
                <p>Best Picks with AI</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[24px]">
                <p>Best of artists</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>

              </div>
            </div>
            <div className="mt-10">
              <div className="text-[24px]">
                <p>Trending Podcasts</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
                <div className="w-[150px] h-[150px] rounded-lg bg-pink-200"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[75%] ml-[24.75vw] px-40 bg-[#01010179] h-[50px]"></div> */}
      </Layout>
    </div>
  );
};

export default page;
