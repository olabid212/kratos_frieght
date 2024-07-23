import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Goodness = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <main className="px-5 xl:px-40 w-full my-40">
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
            Our Goodness
          </p>
          <h1 className="text-[#1C1F35] font-[600] text-[35px] leading-[41px]">
            How We Work
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-20">
          <div data-aos="fade-right" data-aos-duration="600">
            <img className="" src="/Image (7).png" alt="" />
          </div>

          <div
            className="space-y-10"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div className="flex space-x-3">
              <img className="size-10" src="/Icon (19).png" alt="" />
              <div className="space-y-2">
                <h1 className="text-[#1C1F35] font-[500] text-[25px] leading-[29px] ">
                  Warehousing Services
                </h1>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking{" "}
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <img className="size-10" src="/Sheild Icon.png" alt="" />
              <div className="space-y-2">
                <h1 className="text-[#1C1F35] font-[500] text-[25px] leading-[29px]">
                  Safety & Quality
                </h1>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking{" "}
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <img className="size-10" src="/Environment Icon.png" alt="" />
              <div className="space-y-2">
                <h1 className="text-[#1C1F35] font-[500] text-[25px] leading-[29px]">
                  Care For Environment
                </h1>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Goodness;
