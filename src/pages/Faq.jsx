import React, { useEffect, useState } from "react";
import { MdOutlinePhone } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "How can I pay for your logistics services?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      name: "What payment methods are supported?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      name: "What options for logistics plans are available?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
      name: "Can i specify a delivery date when ordering?",
      content:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.",
    },
  ];

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <section className="ps-5 pe-5 bg-gray-100 py-20 w-full my-40 xl:ps-40 flex flex-col gap-20 lg:flex-row overflow-hidden">
        <div className="flex-[50%]  flex flex-col  space-y-4">
          <div className=" " data-aos="fade-right" data-aos-duration="600">
            <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
              FAQ
            </p>
            <h1 className="text-[#1C1F35] font-[600] sm:text-[35px] text-[28px] leading-[41px]">
              Frequently Asked Questions
            </h1>
          </div>

          <ul
            className="space-y-4"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={` py-4 w-fit px-5  ${
                  activeTab === index
                    ? " text-white border-b-4 border-b-[#FFDA56] bg-[#091242]"
                    : "px-0 text-gray-500"
                }`}
                onClick={() => handleClick(index)}
              >
                {tab.name}
              </li>
            ))}
          </ul>

          <div
            className="md:w-[500px] w-[350px]  text-[16px] leading-6 font-[700]"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            {tabs[activeTab].content}
          </div>
        </div>

        <div className="flex-[50%] ">
          <div
            className="w-full  relative"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <img
              className="w-full"
              src="https://res.cloudinary.com/dfuse3jtq/image/upload/v1721568756/Photo_8_q798f5.png"
              alt=""
            />

            <div
              className="md:p-10 p-5 space-y-3 bg-[#091242] absolute bottom-0 left-0 "
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
                Let's Talk
              </p>
              <h1 className="text-[#fff] font-[500] text-[20px] leading-[23px]">
                You need any help? get free consultation
              </h1>
              <div className="flex  items-center space-x-3">
                <div className="bg-[#273270] xl:size-[63px] size-[37px] flex items-center justify-center rounded-full">
                  <MdOutlinePhone className="text-[#fff] xl:size-[22px] size-[18px]" />
                </div>

                <div className="text-[#ffffff] ">
                  <p className="xl:text-[14px] text-[11px]">
                    Call Us <br />
                    (00) 112 365 489
                  </p>
                </div>
              </div>

              <button className="px-6 py-3 bg-[#FFB629]">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
