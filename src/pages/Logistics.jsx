import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Logistics = () => {
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
      img: "/Icon (17).png",
      title: "Project & Exhibition",
      body: "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      img: "/Icon (8).png",
      title: "Local Shipping Services",
      body: "Following the quality of our service thus having gained trust of our many clients.",
    },
    {
      img: "/Icon (18).png",
      title: "Customer Clearance",
      body: "Following the quality of our service thus having gained trust of our many clients.",
    },
  ];
  return (
    <div>
      <section className="px-5 xl:px-40 grid justify-center items-center py-20 w-full my-40 bg-[#F4F4F4]">
        <div
          className="flex flex-col justify-center items-center mb-20 space-y-3 "
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <p className="p-2 text-center text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
            What We Do
          </p>
          <h1 className="text-[#1C1F35] font-[600] sm:text-[35px] text-[28px] leading-[41px]">
            Our Logistics Services
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20  ">
          {services &&
            services.map((service) => (
              <div
                key={service.img}
                className="space-y-3 "
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div>
                  <img className="w-[50px]" src={service.img} alt="" />
                </div>

                <div className="space-y-3">
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

        <div className="mt-20 text-center">
          <Link
            className="text-white px-6 py-3 bg-indigo-950"
            to="/services"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Work Details
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
