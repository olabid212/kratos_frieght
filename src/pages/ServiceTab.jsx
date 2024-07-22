import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (index) => {
    setActiveTab(index);
  };

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
      <section className="px-5 xl:px-40 w-full ">
        <div className="flex flex-col justify-center items-center ">
          <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]">
            Services
          </p>
          <h1 className="text-[#1C1F35] font-[600] text-[35px] leading-[41px]">
            Our Service Details
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-20  gap-5  ">
          {services.map((service, index) => (
            <div
              key={service.img}
              onClick={() => handleChange(index)}
              className={`p-5 ${
                activeTab === index
                  ? "bg-[#091242] text-white "
                  : "border bg-gray-100"
              }`}
            >
              {/* <div>
                  <img className="w-[50px]" src={service.img} alt="" />
                </div> */}

              {/* <div className="space-y-3"> */}
              <p className="font-[400] text-[16px] leading-[29px] ">
                {service.title}
              </p>
              {/* <p className="font-[500] text-[16px] leading-[25px] text-[#666C89]">
                    {service.body}
                  </p> */}
            </div>
            //   </div>
          ))}
        </div>

        {activeTab === 0 && (
          <>
            <div className="mt-20 space-y-7">
              <div>
                <img src="/Image (9).png" alt="" />
              </div>

              <div className="flex items-center  space-x-3">
                <img src="/Icon (6).png" alt="" />
                <p className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Sea Transport Services
                </p>
              </div>

              <div>
                <p className="font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?
                </p>

                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate
                  velit esse, quam nihil molestiae consequatur, vel illum, qui
                  dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                  et accusamus et iusto odio dignissimos ducimus, qui blanditiis
                  praesentium voluptatum deleniti atque corrupti, quos dolores
                  et quas molestias excepturi sint, obcaecati cupiditate non
                  provident, similique sunt in culpa, qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Benefit of Service
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo
                  inventore veritatis.
                </p>
                <ul className="space-y-3 mt-4">
                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Clearance and compliance service
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Automate your business elis tristique
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>
                </ul>
              </div>

              <div className="flex-[60%]">
                <img
                  className=""
                  src="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541830.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_user"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="mt-10 flex-[60%]">
                <video
                  controls
                  autoPlay
                  src="https://videos.pexels.com/video-files/5664985/5664985-uhd_2560_1440_25fps.mp4"
                ></video>
              </div>

              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  How It Works
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, doloremque laudantium.
                </p>
                <p className="mt-4 font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis.
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="mt-20 space-y-7">
              <div>
                <img src="/Image (9).png" alt="" />
              </div>

              <div className="flex items-center  space-x-3">
                <img src="/Icon (7).png" alt="" />
                <p className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Warehousing Services
                </p>
              </div>

              <div>
                <p className="font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?
                </p>

                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate
                  velit esse, quam nihil molestiae consequatur, vel illum, qui
                  dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                  et accusamus et iusto odio dignissimos ducimus, qui blanditiis
                  praesentium voluptatum deleniti atque corrupti, quos dolores
                  et quas molestias excepturi sint, obcaecati cupiditate non
                  provident, similique sunt in culpa, qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Benefit of Service
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo
                  inventore veritatis.
                </p>
                <ul className="space-y-3 mt-4">
                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Clearance and compliance service
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Automate your business elis tristique
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>
                </ul>
              </div>

              <div className="flex-[60%]">
                <img
                  className=""
                  src="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541830.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_user"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="mt-10 flex-[60%]">
                <video
                  controls
                  autoPlay
                  src="https://videos.pexels.com/video-files/5664985/5664985-uhd_2560_1440_25fps.mp4"
                ></video>
              </div>

              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  How It Works
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, doloremque laudantium.
                </p>
                <p className="mt-4 font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis.
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === 2 && (
          <>
            <div className="mt-20 space-y-7">
              <div>
                <img src="/Image (9).png" alt="" />
              </div>

              <div className="flex items-center  space-x-3">
                <img src="/Icon (1).svg" alt="" />
                <p className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Air Freight Services
                </p>
              </div>

              <div>
                <p className="font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?
                </p>

                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate
                  velit esse, quam nihil molestiae consequatur, vel illum, qui
                  dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                  et accusamus et iusto odio dignissimos ducimus, qui blanditiis
                  praesentium voluptatum deleniti atque corrupti, quos dolores
                  et quas molestias excepturi sint, obcaecati cupiditate non
                  provident, similique sunt in culpa, qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Benefit of Service
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo
                  inventore veritatis.
                </p>
                <ul className="space-y-3 mt-4">
                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Clearance and compliance service
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Automate your business elis tristique
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>
                </ul>
              </div>

              <div className="flex-[60%]">
                <img
                  className=""
                  src="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541830.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_user"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="mt-10 flex-[60%]">
                <video
                  controls
                  autoPlay
                  src="https://videos.pexels.com/video-files/5664985/5664985-uhd_2560_1440_25fps.mp4"
                ></video>
              </div>

              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  How It Works
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, doloremque laudantium.
                </p>
                <p className="mt-4 font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis.
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === 3 && (
          <>
            <div className="mt-20 space-y-7">
              <div>
                <img src="/Image (9).png" alt="" />
              </div>

              <div className="flex items-center  space-x-3">
                <img src="/Icon (17).png" alt="" />
                <p className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Project & Exhibition
                </p>
              </div>

              <div>
                <p className="font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?
                </p>

                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate
                  velit esse, quam nihil molestiae consequatur, vel illum, qui
                  dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                  et accusamus et iusto odio dignissimos ducimus, qui blanditiis
                  praesentium voluptatum deleniti atque corrupti, quos dolores
                  et quas molestias excepturi sint, obcaecati cupiditate non
                  provident, similique sunt in culpa, qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Benefit of Service
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo
                  inventore veritatis.
                </p>
                <ul className="space-y-3 mt-4">
                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Clearance and compliance service
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Automate your business elis tristique
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>
                </ul>
              </div>

              <div className="flex-[60%]">
                <img
                  className=""
                  src="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541830.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_user"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="mt-10 flex-[60%]">
                <video
                  controls
                  autoPlay
                  src="https://videos.pexels.com/video-files/5664985/5664985-uhd_2560_1440_25fps.mp4"
                ></video>
              </div>

              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  How It Works
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, doloremque laudantium.
                </p>
                <p className="mt-4 font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis.
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === 4 && (
          <>
            <div className="mt-20 space-y-7">
              <div>
                <img src="/Image (9).png" alt="" />
              </div>

              <div className="flex items-center  space-x-3">
                <img src="/Icon (8).png" alt="" />
                <p className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Local Shipping Services
                </p>
              </div>

              <div>
                <p className="font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?
                </p>

                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate
                  velit esse, quam nihil molestiae consequatur, vel illum, qui
                  dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                  et accusamus et iusto odio dignissimos ducimus, qui blanditiis
                  praesentium voluptatum deleniti atque corrupti, quos dolores
                  et quas molestias excepturi sint, obcaecati cupiditate non
                  provident, similique sunt in culpa, qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Benefit of Service
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo
                  inventore veritatis.
                </p>
                <ul className="space-y-3 mt-4">
                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Clearance and compliance service
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Automate your business elis tristique
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>
                </ul>
              </div>

              <div className="flex-[60%]">
                <img
                  className=""
                  src="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541830.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_user"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="mt-10 flex-[60%]">
                <video
                  controls
                  autoPlay
                  src="https://videos.pexels.com/video-files/5664985/5664985-uhd_2560_1440_25fps.mp4"
                ></video>
              </div>

              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  How It Works
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, doloremque laudantium.
                </p>
                <p className="mt-4 font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis.
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === 5 && (
          <>
            <div className="mt-20 space-y-7">
              <div>
                <img src="/Image (9).png" alt="" />
              </div>

              <div className="flex items-center  space-x-3">
                <img src="/Icon (18).png" alt="" />
                <p className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Customer Clearance
                </p>
              </div>

              <div>
                <p className="font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?
                </p>

                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate
                  velit esse, quam nihil molestiae consequatur, vel illum, qui
                  dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                  et accusamus et iusto odio dignissimos ducimus, qui blanditiis
                  praesentium voluptatum deleniti atque corrupti, quos dolores
                  et quas molestias excepturi sint, obcaecati cupiditate non
                  provident, similique sunt in culpa, qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  Benefit of Service
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo
                  inventore veritatis.
                </p>
                <ul className="space-y-3 mt-4">
                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Clearance and compliance service
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Automate your business elis tristique
                    </li>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <FaArrowRight />
                    <li className="font-[400] text-[20px] leading-[23px] text-[#1C1F35]">
                      Saving Time to Deal with commodo iaculis
                    </li>
                  </div>
                </ul>
              </div>

              <div className="flex-[60%]">
                <img
                  className=""
                  src="https://img.freepik.com/free-photo/transport-logistics-products_23-2151541830.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_user"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="mt-10 flex-[60%]">
                <video
                  controls
                  autoPlay
                  src="https://videos.pexels.com/video-files/5664985/5664985-uhd_2560_1440_25fps.mp4"
                ></video>
              </div>

              <div className="flex-[40%]">
                <h1 className="font-[600] text-[#1C1F35] md:text-[35px] text-[28px] leading-[41px]">
                  How It Works
                </h1>
                <p className="font-[500] mt-4 text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, doloremque laudantium.
                </p>
                <p className="mt-4 font-[500] text-[16px] leading-[24px] text-[#666C89]">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis.
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default ServiceTab;
