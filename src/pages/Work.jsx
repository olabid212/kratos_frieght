import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <main className="mt-40 -mb-[100px] px-5 lg:px-40 overflow-hidden">
        <div className="text-center">
          <p
            className="text-[35px] leading-[41px] font-[600] text-[#1C1F35] mb-10"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Transporting Across The World
          </p>
        </div>

        <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10">
          <div
            className="relative xl:block md:block hidden transition transform hover:scale-110 duration-300 delay-150 ease-in-out"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <img src="/Photo (3).png" alt="" />
            <img className="absolute top-0" src="/Background (2).png" alt="" />

            <div className="absolute bottom-2 left-2">
              <p className="text-[#fff]">Liquid Transportation</p>
              <p className="text-[#FFB629]">Premium Tankers</p>
            </div>
          </div>

          <div
            className="relative xl:block md:hidden hidden"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <img src="/Photo (4).png" alt="" />
            <img className="absolute top-0" src="/Background (2).png" alt="" />

            <div className="absolute  bottom-2 left-2">
              <p className="text-[#fff]">Packaging Solutions</p>
              <p className="text-[#FFB629]">Warehouse Management</p>
            </div>
          </div>

          <div
            className="relative xl:block md:hidden hidden"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <img src="/Photo (5).png" alt="" />
            <img className="absolute top-0" src="/Background (2).png" alt="" />

            <div className="absolute bottom-2 left-2">
              <p className="text-[#fff]">Contract Logistics</p>
              <p className="text-[#FFB629]">Road Transportation</p>
            </div>
          </div>

          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <img src="/Photo (6).png" alt="" />
            <img className="absolute top-0" src="/Background (2).png" alt="" />

            <div className="absolute bottom-2 left-2">
              <p className="text-[#fff]">Warehouse & Distribution</p>
              <p className="text-[#FFB629]">Large Warehouse</p>
            </div>
          </div>

          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <img src="/Photo (7).png" alt="" />
            <img className="absolute top-0" src="/Background (2).png" alt="" />

            <div className="absolute bottom-2 left-2">
              <p className="text-[#fff]">Specialized Transport</p>
              <p className="text-[#FFB629]">Ocean Transports</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
