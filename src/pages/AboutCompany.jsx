import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Our Approach",
      content:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.",
    },
    {
      name: "Our Approach",
      content:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.",
    },
    {
      name: "Our Approach",
      content:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.",
    },
  ];

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <section className="px-5 xl:px-40 my-40 w-full flex flex-col items-center justify-center  gap-20 lg:flex-row ">
        <div className="flex-[50%]">
          <img src="/Image (6).png" alt="" />
        </div>

        <div className="flex-[50%] ">
          <div className="space-y-4 mb-14">
            <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
              About Us
            </p>
            <h1 className="text-[#1C1F35] font-[600] sm:text-[35px] text-[28px] leading-[41px]">
              Our Company Overview
            </h1>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
          </div>

          <ul className="flex w-full my-5  space-x-5">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`px-4 py-4   ${
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

          <div className="  text-[16px] leading-6 font-[700]">
            {tabs[activeTab].content}
          </div>

          <div className="bg-indigo-950 mt-10 text-white w-fit px-6 py-3">
            <Link to="/" className="text-white  ">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCompany;
