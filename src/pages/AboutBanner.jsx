import React from "react";
import Navbar from "../components/Navbar";

const AboutBanner = () => {
  return (
    <div className='bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1721574575/Background_6_y26ddi.png")] w-full mb-40 h-[70vh]'>
      <Navbar />

      <section className="px-5 xl:px-40  grid items-center min-h-full">
        <div className="">
          <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-4 border-[#FFB629]">
            About Us
          </p>
          <h1 className="text-[#fff] font-[700] text-[60px] leading-[71px]">
            About Our Logistics
          </h1>
        </div>
      </section>
    </div>
  );
};

export default AboutBanner;
