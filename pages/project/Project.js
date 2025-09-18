import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Navigate, Routes } from '../../navigation/NavigationLib'

const Project = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const slides = [
    { id: 1, img: "info-img 4.png" },
    { id: 2, img: "project-img-1.png" },
    { id: 3, img: "project-img-3.png" },
    { id: 4, img: "furniture.png" },
    { id: 5, img: "house-hall.png" },
  ];

  return (
    <div className="project-page">
      <div className="project-banner">
        <div className="container">
          <div className="project-banner-inner my-[60px] text-sm">
            <div>
              <h1 className="text-xl md:text-2xl lg:text-5xl font-semibold">
                Our Projects
              </h1>
              <p className="my-[20px] lg:w-[600px] text-sm md:text-base lg:text-lg">
                From residential to commercial, our work reflects craftsmanship,
                reliability, and innovation.
              </p>
              <button className="mb-[20px] text-sm md:text-base lg:text-lg bg-gray-950 text-white py-[5px] px-[9px] border rounded">
                CONTACT US <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="project">
        <div className="container">
          <div className="project-inner">
            <div className="project-viewport overflow-hidden" ref={emblaRef}>
              <div className="slider-container flex gap-4">
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    className="project__slide flex-[0_0_80%]"
                  >
                    <img
                      className="w-full h-[450px] object-cover rounded-xl shadow-lg"
                      src={slide.img}
                      alt={`Slide ${slide.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="project-details flex items-start mt-[25px]">
            <div className="project-name my-10">
                  <h2 className="text-2xl font-bold mb-4" onClick={() => Navigate(Routes.projectDetail)}>Project Name</h2>
                  <div className="info sm:gap-6 mb-4">
                    <span className="text-lg sm:text-xl font-semibold text-black">
                      Type: Residential
                    </span><br/>
                    <span className="text-lg sm:text-xl font-semibold text-black">
                      Location: Ahmedabad
                    </span>
                  </div>
                  <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    <img
                      src="project-img-1.png"
                      className="w-full h-64 sm:h-full object-cover col-span-1 sm:col-span-2 rounded-lg"
                      alt="Project 1 Image 1"
                    />
                    <img
                      src="project-img-2.png"
                      className="w-full h-64 sm:h-full object-cover rounded-lg"
                      alt="Project 1 Image 2"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-4" onClick={() => Navigate(Routes.projectDetail)}>Project Name</h2>
                  <div className="info sm:gap-6 mb-4">
                    <span className="text-lg sm:text-xl font-semibold text-black">
                      Type: Commercial
                    </span><br/>
                    <span className="text-lg sm:text-xl font-semibold">
                      Location:Gandhhinagar
                    </span>
                  </div>

                  <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <img
                      src="project-img-3.png"
                      className="w-full h-full sm:h-full object-cover col-span-1 sm:col-span-2 rounded-lg"
                      alt="Project 2 Image 1"
                    />
                    <img
                      src="project-img-4.png"
                      className="w-full h-full sm:h-full object-cover rounded-lg"
                      alt="Project 2 Image 2"
                    />
                  </div>
                </div>

              <div className="slide-nav flex items-center gap-2.5">
                <button
                  onClick={scrollPrev}
                  className="bg-black rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <i className="fi fi-rr-angle-small-left text-[20px] h-5 leading-tight text-white"></i>
                </button>
                <button
                  onClick={scrollNext}
                  className="bg-black rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <i className="fi fi-rr-angle-small-right text-[20px] h-5 leading-tight text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
