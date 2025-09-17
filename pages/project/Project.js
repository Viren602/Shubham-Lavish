import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Project = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const slides = [
    { id: 1, img: "https://picsum.photos/id/1015/600/350" },
    { id: 2, img: "https://picsum.photos/id/1016/600/350" },
    { id: 3, img: "https://picsum.photos/id/1018/600/350" },
    { id: 4, img: "https://picsum.photos/id/1020/600/350" },
    { id: 5, img: "https://picsum.photos/id/1024/600/350" },
  ];

  return (
    <div className="project-page">
      <div className="project-banner">
        <div className="container">
          <div className="project-banner-inner my-[60px] text-sm">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-5xl font-semibold">
                Our Projects
              </h3>
              <p className="my-[20px] lg:w-[600px] text-sm md:text-base lg:text-lg">
                From residential to commercial, our work reflects craftsmanship,
                reliability, and innovation.
              </p>
              <button className="mb-[20px] text-sm md:text-base lg:text-lg">
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
            <div className="project-details flex items-start justify-between mt-[25px]">
              <div className="project-name">
                <h2>Project Name</h2>
                <div className="info grid gap-[4px]">
                  <span className="text-[20px] font-semibold text-black">Type: Commercial</span>
                  <span className="text-[20px] font-semibold text-black">Location: Ahmedabad</span>
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
