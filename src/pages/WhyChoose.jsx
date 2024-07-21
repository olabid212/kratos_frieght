import React from "react";

const WhyChoose = () => {
  return (
    <div>
      <section className=" mb-40 w-full  bg-gray-100 flex flex-col lg:flex-row min-h-[80vh] overflow-hidden">
        <div className="bg-[#091242]  min-h-[70vh] flex-[50%] relative">
          <div className="w-full relative">
            <img
              className=" absolute lg:top-[120px]  xl:-right-[100px] "
              src="/Image.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex-[50%] xl:px-40 px-5 py-20  ">
          <div className="space-y-5 ">
            <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
              Why Choose
            </p>
            <h1 className="text-[#1C1F35] font-[600] text-[35px] leading-[41px]">
              We create opportunity to reach potential
            </h1>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.{" "}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-3  grid-cols-2 gap-5  mt-10">
            <div className="flex items-center space-x-3">
              <img src="/Icon (11).png" alt="" />
              <p>Safe Package</p>
            </div>

            <div className="flex items-center space-x-3">
              <img src="/Icon (12).png" alt="" />
              <p>Ship Everyware</p>
            </div>

            <div className="flex items-center space-x-3">
              <img src="/Icon (13).png" alt="" />
              <p>Global Tracking</p>
            </div>

            <div className="flex items-center space-x-3">
              <img src="/Icon (14).png" alt="" />
              <p>24/7 Support</p>
            </div>

            <div className="flex items-center space-x-3">
              <img src="/Icon (15).png" alt="" />
              <p>In-Time Delivery</p>
            </div>

            <div className="flex items-center space-x-3">
              <img src="/Icon (16).png" alt="" />
              <p>Transparent Pricing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
