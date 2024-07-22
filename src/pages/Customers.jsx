// import React from 'react'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const Customers = () => {
  const customers = [
    {
      img: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?ga=GA1.1.1642242442.1716375531&semt=sph",
      name: "Kathleen Smith",
      job: "Fuel Company",
      image: "/_.png",
      body: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
      img: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?ga=GA1.1.1642242442.1716375531&semt=sph",
      name: "Kathleen Smith",
      job: "Fuel Company",
      image: "/_.png",
      body: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
      img: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?ga=GA1.1.1642242442.1716375531&semt=sph",
      name: "Kathleen Smith",
      job: "Fuel Company",
      image: "/_.png",
      body: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
      img: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?ga=GA1.1.1642242442.1716375531&semt=sph",
      name: "Kathleen Smith",
      job: "Fuel Company",
      image: "/_.png",
      body: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
      img: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?ga=GA1.1.1642242442.1716375531&semt=sph",
      name: "Kathleen Smith",
      job: "Fuel Company",
      image: "/_.png",
      body: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
      img: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?ga=GA1.1.1642242442.1716375531&semt=sph",
      name: "Kathleen Smith",
      job: "Fuel Company",
      image: "/_.png",
      body: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
  ];

  return (
    <>
      <div className="px-5 xl:px-40 w-full mb-40 ">
        <div className=" mb-[50px]">
          <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
            Testimonials
          </p>
          <h1 className="text-[#1C1F35] font-[600] sm:text-[35px] text-[28px] leading-[41px]">
            What Our Customer Say
          </h1>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          <div className="">
            {customers.map((customer) => (
              <SwiperSlide className="bg-[#F4F4F4] md:p-10 p-8 mb-20">
                <div className="space-y-5">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                      <div>
                        <img
                          className="size-[100px] rounded-full"
                          src={customer.img}
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-[#091242]">{customer.name}</p>
                        <p>{customer.job}</p>
                      </div>
                    </div>

                    <div>
                      <img src={customer.image} alt="" />
                    </div>
                  </div>

                  <p className="text-[14px]">{customer.body}</p>

                  <div className="flex space-x-3 ">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Customers;
