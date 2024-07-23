import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      img: "/Icon (6).png",
      title: "Sea Transport Services",
      body: "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      img: "/Icon (7).png",
      title: "Warehousing Services",
      body: "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      img: "/Icon (1).svg",
      title: "Air Fright Services",
      body: "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      img: "/Icon (8).png",
      title: "Local Shipping Services",
      body: "Following the quality of our service thus having gained trust of our many clients.",
    },
  ];

  return (
    <div>
      <section className="px-5 xl:px-40 w-full my-40 min-h-[50vh] py-20 gap-20 flex flex-col lg:flex-row  ">
        <div
          className="flex-[30%] "
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
            What We Do
          </p>
          <h1 className="text-[#1C1F35] font-[600] text-[35px] leading-[41px]">
            Safe & Reliable Cargo Solutions
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 flex-[70%] ">
          {services &&
            services.map((service) => (
              <div
                key={service.img}
                className="flex space-x-4"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <div>
                  <img className="w-[80px]" src={service.img} alt="" />
                </div>

                <div className="border-l px-3 border-[#D8D8D8]">
                  <p className="font-[400] text-[25px] leading-[29px] text-[#1C1F35]">
                    {service.title}
                  </p>
                  <p className="font-[500] text-[16px] leading-[25px] text-[#666C89]">
                    {service.body}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
