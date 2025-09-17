import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const Project = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const slides = [
    { id: 1, img: "https://picsum.photos/id/1015/600/350" },
    { id: 2, img: "https://picsum.photos/id/1016/600/350" },
    { id: 3, img: "https://picsum.photos/id/1018/600/350" },
    { id: 4, img: "https://picsum.photos/id/1020/600/350" },
    { id: 5, img: "https://picsum.photos/id/1024/600/350" },
  ];

  return (
    <div className="project-page">
      <div className="project">
        <div className="container">
          <div className="project-inner my-[60px] text-sm">
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
            <div className="flex flex-nowrap gap-[20px]">
              <div>
                <img src="project-img-1.png" />
              </div>
              <div>
                <img src="project-img-2.png" />
              </div>
            </div>
            <div className="my-[30px] flex justify-between">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">
                  Project Name
                </h2>
                <h6 className="my-[15px] text-sm md:text-base lg:text-lg">
                  Type : Residential
                </h6>
                <h6 className="text-sm md:text-base lg:text-lg">
                  Location: Ahmedabad
                </h6>
              </div>
              <div className="flex gap-[10px] mx-[10px] text-[25px]">
                <i class="fi fi-rr-angle-small-left"></i>
                <i class="fi fi-rr-angle-small-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-project">
        <div className="container">
          <div className="second-project-inner mb-[60px]">
            <div className="flex flex-nowrap gap-[20px]">
              <div>
                <img src="project-img-3.png" />
              </div>
              <div>
                <img src="project-img-4.png" />
              </div>
            </div>
            <div className="my-[30px] flex justify-between">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">
                  Project Name
                </h2>
                <h6 className="my-[15px] text-sm md:text-base lg:text-lg">
                  Type : Commercial
                </h6>
                <h6 className="text-sm md:text-base lg:text-lg">
                  Location: Gandhhinagar
                </h6>
              </div>
              <div className="flex gap-[10px] mx-[10px] text-[25px]">
                <i class="fi fi-rr-angle-small-left"></i>
                <i class="fi fi-rr-angle-small-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  src={slide.img}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
