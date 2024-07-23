import React, { useEffect } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { MdOutlinePhone } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full my-40  xl:px-40 ">
      <section className="  xl:px-24  ">
        <div className="bg-[#091242] xl:p-20 p-8 space-y-10">
          <div className="space-y-4">
            <p
              className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-4 border-[#FFB629]"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              Contact
            </p>
            <h1
              className="text-[#fff] font-[600] text-[35px] leading-[41px]"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              Get In Touch With Us
            </h1>
            <p
              className="text-[#fff]"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>
          </div>

          <div className="flex justify-between">
            <div
              className="grid items-center justify-center  "
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="bg-[#273270] xl:size-[63px] size-[37px]   flex items-center justify-center rounded-full">
                <GoClock className="text-[#fff] size-[22px]" />
              </div>

              <div className="text-[#ffffff] ">
                <p className="xl:text-[14px] text-[11px]">
                  Mon - Sat 9.00 - 18.00 <br />
                  Sunday Closed
                </p>
              </div>
            </div>

            <div className="" data-aos="fade-up" data-aos-duration="600">
              <div className="bg-[#273270] xl:size-[63px] size-[37px] flex items-center justify-center rounded-full">
                <FaRegEnvelope className="text-[#fff] size-[22px]" />
              </div>

              <div className="text-[#ffffff]">
                <p className="xl:text-[14px] text-[11px]">
                  contact@logistics.com
                </p>
              </div>
            </div>

            <div className="" data-aos="fade-left" data-aos-duration="600">
              <div className="bg-[#273270] xl:size-[63px] size-[37px] flex items-center justify-center rounded-full">
                <MdOutlinePhone className="text-[#fff] xl:size-[22px] size-[18px]" />
              </div>

              <div className="text-[#ffffff] ">
                <p className="xl:text-[14px] text-[11px]">(00) 112 365 489</p>
              </div>
            </div>
          </div>

          <div>
            <form
              className="flex flex-col max-sm:gap-7  gap-5"
              data-aos="zoom-in"
              data-aos-duration="600"
            >
              <div className="flex max-sm:flex-col max-sm:gap-7 gap-10">
                <input
                  className="bg-[#091242] outline-none border px-6 py-3 w-full text-white"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="bg-[#091242] outline-none border px-6 py-3 w-full text-white"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="flex max-sm:flex-col max-sm:gap-7 gap-10">
                <input
                  className="bg-[#091242] outline-none border px-6 py-3 w-full text-white"
                  type="phone"
                  placeholder="Phone Number"
                />
                <input
                  className="bg-[#091242] outline-none border px-6 py-3 w-full text-white"
                  type="text"
                  placeholder="City"
                />
              </div>

              <textarea
                className="bg-[#091242] outline-none border px-6 py-3 w-full text-white"
                name=""
                id=""
                placeholder="Your Message"
                rows={5}
                cols={5}
              ></textarea>

              <button
                className="px-6 w-fit mx-auto py-3 bg-yellow-400"
                type="submit"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="grid sm:grid-cols-4 grid-cols-2 mt-20 ">
        <div className="border border-gray-600">
          <img className="h-full" src="/1.png" alt="" />
        </div>
        <div className="border border-gray-600">
          <img src="/3 (2).png" alt="" />
        </div>

        <div className="border border-gray-600">
          <img src="/2 (2).png" alt="" />
        </div>

        <div className="border border-gray-600">
          <img src="/4 (3).png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
