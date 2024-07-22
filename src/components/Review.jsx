import React from "react";

const Review = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2 ">
        <div className="flex flex-col md:flex-row border xl:p-10 p-5 justify-center items-center border-[#D4D4D4] space-x-3">
          <p className="text-[#1C1F35] xl:text-[50px] text-[30px] font-[600] leading-[59px] ">
            24
          </p>
          <div className="flex items-center space-x-3">
            <img className="size-5" src="/Pattern.png" alt="" />
            <p>Our Location</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border justify-center items-center xl:p-10 p-5 border-[#D4D4D4] space-x-3">
          <p className="text-[#1C1F35] xl:text-[50px] text-[30px] font-[600] leading-[59px] ">
            1294
          </p>
          <div className="flex  items-center space-x-3">
            <img className="size-5" src="/Pattern.png" alt="" />
            <p>Delivered Packages</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border justify-center items-center xl:p-10 p-5 border-[#D4D4D4] space-x-3">
          <p className="text-[#1C1F35] xl:text-[50px] text-[30px] font-[600] leading-[59px] ">
            3594
          </p>
          <div className="flex items-center space-x-3">
            <img className="size-5" src="/Pattern.png" alt="" />
            <p>Satisfied Clients</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border justify-center items-center xl:p-10 p-5 border-[#D4D4D4] space-x-3">
          <p className="text-[#1C1F35] xl:text-[50px] text-[30px] font-[600] leading-[59px] ">
            247+
          </p>
          <div className="flex items-center space-x-3">
            <img className="size-5" src="/Pattern.png" alt="" />
            <p>Owned Vehicles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
