import React, { Component, createRef } from "react";
import Latest_project from "../../components/reuseSection/latest_project";
import CTA from "../../components/reuseSection/CTA";

function About()   {
  return (
    <>
      <div className="about-page">
        <div className="inner justify-items-center text-center py-[30px] text-white bg-[url('/about-banner.png')] bg-cover bg-center bg-no-repeat w-[100%]">
          <h1 className="py-[20px]">About Us</h1>
          <p className="text-white lg:w-[800px]">
            We believe construction is more than concrete and steel—it’s about
            shaping dreams into reality. With integrity and innovation at the
            core, Shubham Lavis stands as your trusted construction partner.
          </p>
          <button className="my-[20px] bg-black px-[30px] py-[10px]">
            OUR WORK <span>→</span>
          </button>
        </div>

        <div className="mission my-20">
          <div className="container">
            <div className="mission-inner flex flex-col lg:flex-row gap-10 lg:gap-20 items-center ">
              <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-4 text-center lg:text-left lg:mt-[50px] md:mt-[100px]">
                <span className="text-base font-semibold flex items-center"><p className="h-[2px] w-[45px] bg-gray-800 mr-[10px]"></p>Who We Are</span>
                <h2 className="text-xl md:text-3xl text-left font-bold leading-snug">
                  Crafting Spaces, <br /> Creating Futures
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-left text-gray-700">
                  At Shubham Lavis Construction Company, we believe that
                  construction is not just about building structures—it’s about
                  building trust, relationships, and a better future. Since our
                  inception, we have been committed to delivering projects that
                  combine quality, innovation, and precision.
                </p>
                <p className="text-sm md:text-base text-left">
                  At Shubham Lavis, we don’t just construct buildings; we create
                  spaces that inspire confidence and stand strong for
                  generations.
                </p>
                <br />

                <span className="font-semibold flex items-center">Our Mission <p className="h-[2px] w-[70px] bg-gray-800 mt-[5px] ml-[10px]"></p></span>
                <p className="text-sm md:text-base leading-relaxed text-gray-700 text-left">
                  We believe that construction is not only about building
                  structures, but also about creating trust, value, and a better
                  future. At Shubham Lavis Construction Company, our mission is
                  to deliver projects with quality, innovation, and safety at
                  their core—turning every vision into lasting reality.
                </p>
              </div>

              <div className="relative grid md:grid-cols-1 w-full lg:w-1/2 flex flex-col items-center lg:items-start order-1 lg:order-2">
                <div>
                  <img src="group 5.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="choice ">
          <div className="container">
            <div className="choice-inner">
              <div className="text-center">
                <h4 className="text-xl font-semibold flex items-center xl:mx-[490px] lg:mx-[380px] md:mx-[255px] text-center">Why Choose Us <p className="h-[2px] w-[45px] bg-gray-800 mx-[10px] mt-[5px]"></p></h4>
                <h2 className="py-[20px] text-xl capitalize lg:text-4xl">
                  Why We’re Your Best Choice
                </h2>
                <p>
                  We deliver quality construction with innovation, trust, and
                  timely execution — making every project a<br /> lasting
                  success.
                </p>
              </div>
              <div className="grid grid lg:grid-cols-3 gap-[24px] my-[30px] md:grid-cols-2">
                <div className="border-[1px] py-[20px] px-[30px] text-base/10">
                  <img src="lightbulb-on.png" />
                  <h3 className="py-[20px] text-xl lg:text-4xl">
                    Innovation Solutions
                  </h3>
                  <p>
                    We bring modern construction methods and creative solutions
                    to every project, ensuring efficiency, sustainability, and
                    long-lasting value.
                  </p>
                  <span className="text-[25px] font-medium ">50+</span>
                  <p>Projects Successfully Completed</p>
                </div>
                <div>
                  <img src="architecture droing.png" />
                </div>
                <div className="border-[1px] py-[20px] px-[30px] text-base/10">
                  <img src="diamond 1.png" />
                  <h3 className="py-[20px] text-xl lg:text-4xl">
                    Quality Craftsmanship
                  </h3>
                  <p>
                    With attention to detail and a commitment to excellence, we
                    deliver structures that combine durability, safety, and
                    superior finishing.
                  </p>
                  <span className="text-[25px] font-medium">2M+</span>
                  <p>Sq. Ft. Constructed</p>
                </div>
                <div>
                  <img src="house-hall.png" />
                </div>
                <div className="border-[1px] py-[20px] px-[30px] text-base/10">
                  <img src="talent-hand 1.png" />
                  <h3 className="py-[20px] text-xl lg:text-4xl">
                    Expertise & Experience
                  </h3>
                  <p>
                    Backed by years of industry knowledge, our skilled team
                    ensures every project is managed with precision,
                    professionalism, and reliability.
                  </p>
                  <span className="text-[25px] font-medium">20+</span>
                  <p>Years of Industry Excellence</p>
                </div>
                <div>
                  <img src="made-building.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CTA title="Have A Question ? Start Consultation Now" />

        <Latest_project />
      </div>
    </>
  );
}

export default About;
