import React, { useCallback } from "react";
import CTA from "../../components/reuseSection/CTA";
import Latest_project from "../../components/reuseSection/latest_project";
import useEmblaCarousel from "embla-carousel-react";

const Home = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const slides = [
    {
      id: 1,
      img: "Ellipse 1.png",
      name: "Menta Nia",
      company_name: "Company Name",
      description:
        "“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “",
    },
    {
      id: 2,
      img: "Ellipse 2.png",
      name: "Sannad",
      company_name: "Company Name",
      description:
        "“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “",
    },
    {
      id: 3,
      img: "Ellipse 3.png",
      name: "George",
      company_name: "Company Name",
      description:
        "“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “",
    },
  ];
  return (
    <>
      <div className="home-page">
        <div className="banner bg-white">
          <div className="container">
            <div className="inner flex flex-col md:flex-row items-center mt-6">
              <div className="w-full md:w-1/2 text-left md:text-left">
                <h1 className="text-3xl lg:text-4xl md:text-2xl font-bold mt-6 md:w-[420px]">
                  Create A Modern And Unique Design Your Dream
                </h1>
                <p className="mt-4 text-gray-600 md:w-[500px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing dui tellus commodo convallis. Auctor eget orci
                  pharetra non. Integer lorem in scelerisque tortor dui tempor
                </p>
                <button className="bg-black text-white flex items-center gap-2 px-5 py-2 mt-6 mx-auto md:mx-0">
                  VIEW A PROJECT
                  <span>→</span>
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="banner.png"
                  alt="Banner"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="home-page-inner mx-auto px-4 mt-10">
          <div className="container">
            <div className="md:flex">
              <div className="mt-6">
                <ul className="flex flex-wrap items-center gap-6 md:gap-10">
                  <li>
                    <img src="Logo-1.png" className="h-6 sm:h-8 md:h-10" />
                  </li>
                  <li>
                    <img src="Logo-2.png" className="h-6 sm:h-8 md:h-10" />
                  </li>
                  <li>
                    <img src="Logo-3.png" className="h-6 sm:h-8 md:h-10" />
                  </li>
                  <li>
                    <img src="Logo-4.png" className="h-6 sm:h-8 md:h-10" />
                  </li>
                  <li>
                    <img src="Logo-5.png" className="h-6 sm:h-8 md:h-10" />
                  </li>
                  <li>
                    {" "}
                    <img src="Logo-6.png" className="h-6 sm:h-8 md:h-10" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="frame mx-auto px-4">
          <div className="container">
            <div className="frame-inner flex flex-col lg:flex-row mt-12 gap-[60px]">
              <div className="relative flex gap-6">
                <div>
                  <img src="frame-image.png" className="w-full" />
                </div>
                <div className="relative">
                  <img src="hall-image.png" className="w-full" />
                  <div className="absolute my-[20px] lg:mx-[-40px] mx-[-20px]">
                    <img
                      src="frame-info.png"
                      className="w-[800px] rounded-lg lg:mx-[-30px] sm:mx-[-40px] mx-[-14px] my-[-10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 mt-10 lg:mt-14 text-left lg:text-left">
                <span className="text-sm flex tracking-wide items-center text-gray-900 mb-2">
                  <p className="h-[2px] w-[70px] bg-gray-800 mr-[10px]"></p> Hello There
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug my-4">
                  We work professionally <br className="hidden lg:block" />
                  and wholeheartedly
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:w-[493px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing dui tellus commodo convallis. Auctor eget orci
                  pharetra non. Integer lorem in scelerisque tortor dui tempor,
                  volutpat viverra faucibus. Sagittis maecenas tincidunt at
                  purus. Amet non vel elit aliquet id dolor risus imperdiet
                  vitae. Amet, sagittis mauris morbi erat velit id nullam. Lorem
                  ipsum dolor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="container">
            <div className="services-inner mt-[90px] flex-col md:flex-row items-center gap-10 mt-6">
              <h6>Services</h6>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-[10px] w-full md:text-left ">
                Our capacity to help make your wishes come true
              </h2>
              <div className="mt-[20px]">
                <ul className="flex lg:flex-row gap-4 flex-col">
                  <li>
                    <img
                      src="interior design.png"
                      className="w-full sm:w-auto"
                    />
                  </li>
                  <li>
                    {" "}
                    <img
                      src="Architecture.png"
                      className="w-full sm:w-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="Furniture Design.png"
                      className="w-full sm:w-auto"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Latest_project />

        <div className="testimonial overflow-hidden">
          <div className="container">
            <h6>Testimonial</h6>
            <h4 className="mt-[20px]">What Our Clients Say</h4>
            <div className="" ref={emblaRef}>
              <div className="slider-container flex lg: mb-[40px]">
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    className="project__slide flex-[0_0_100%] lg:flex-[0_0_33%] px-5"
                  >
                    <div className="bg-gray-100 p-6 sm:p-10 rounded-xl shadow-md w-full mx-auto my-[40px]">
                      <div className="flex gap-4 items-center">
                        <img
                          className="w-[80px] h-[80px] object-cover rounded-full shadow-lg"
                          src={slide.img}
                          alt={`Slide ${slide.id}`}
                        />
                        <div className="">
                          <h3 className="text-[13px] lg:text-[20px]  font-bold">{slide.name}</h3>
                          <h4 className="text-gray-600 text-[12px] md:text-xl">
                            {slide.company_name}
                          </h4>
                        </div>
                      </div>
                      <p className="mt-6 text-sm sm:text-base text-gray-700 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="slide-nav flex items-end gap-2.5 justify-center mx-[20px] mb-[40px] lg:hidden">
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

        {/* <div className="testimonial py-[80px]">
            <div className="container ">
              <div className="inner">
                <h6>Testimonial</h6>
                <h4 className="mt-[20px]">What Our Clients Say</h4>
                <div className="flex gap-[40px] mt-[20px]">
                  <div className="p-[30px]  bg-gray-100">
                    <div className="flex gap-[20px]">
                      <div><img src="Ellipse 1.png" /></div>
                      <div className="mt-2">
                        <h5>Menta Nia</h5>
                        <p>Company Name</p>
                      </div>
                    </div>
                    <p className="mt-[25px]">“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “
                    </p>
                  </div>
                  <div className="p-[30px] bg-gray-100">
                    <div className="flex gap-[20px]">
                      <div><img src="Ellipse 2.png" /></div>
                      <div className="mt-2">
                        <h5>Sannad</h5>
                        <p>Company Name</p>
                      </div>
                    </div>
                    <p className="mt-[25px]">“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “
                    </p>
                  </div>
                  <div className="p-[30px] bg-gray-100">
                    <div className="flex gap-[20px]">
                      <div><img src="Ellipse 3.png" /></div>
                      <div className="mt-2">
                        <h5>George</h5>
                        <p>Company Name</p>
                      </div>
                    </div>
                    <p className="mt-[25px]">“ Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non “
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div className="cta-outer bg-[url('/CTC.png')] bg-cover bg-center bg-no-repeat py-[80px] sm:p-[20px]">
            <div className="container">
              <div className="cta-inner w-full w-[40%] w-full mx-auto">
                <h4 className="lg:w-[500px] lg:text-[30px] text-2xl">Have A Question ? Start Consultation Now</h4>
                <p className="cta-inner mt-[20px] sm:w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis.</p>
                <button className="bg-black text-white pl-[10px] pr-[10px] pt-[5px] pb-[5px] mt-[20px]">CONTACT US</button>
              </div>
            </div>
          </div> */}
        <CTA title="Have A Question ? Start Consultation Now" />

        <div className="blog">
          <div className="container">
            <div className="blog-inner my-[80px]">
              <span className="text:xl lg:text-xl font-semibold">Our Blog</span>
              <h2 className="text-xl lg:text-4xl font-bold mt-[20px]">
                Latest News and Articles
              </h2>
              <div className="md:flex gap-[40px] items-center">
                <div className="my-[40px]">
                  <img src="Design1.png" className="mb-[20px]" />
                  <span className="text-xl lg:text-2xl font-semibold">
                    interior Design
                  </span>
                  <h3 className="text-2xl lg:text-4xl  my-[10px]">
                    Designer must be an interpreter
                  </h3>
                  <p className="mt-[25px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing dui tellus commodo convallis. Auctor eget orci
                    pharetra non.
                  </p>
                </div>
                <div className="my-[50px]">
                  <img src="Design2.png" className="mb-[20px]" />
                  <span className="text-xl lg:text-2xl font-semibold">
                    interior Design
                  </span>
                  <h3 className="text-xl lg:text-4xl my-[10px]">
                    12 Best Outdoor Furniture Ideas
                  </h3>
                  <p className="mt-[25px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing dui tellus commodo convallis. Auctor eget orci
                    pharetra non.
                  </p>
                </div>
                <div className="my-[50px]">
                  <img src="Design3.png" className="mb-[20px]" />
                  <span className="text-xl lg:text-2xl font-semibold">
                    interior Design
                  </span>
                  <h3 className="text-xl lg:text-4xl my-[10px]">
                    10 Of The Unique Buildings
                  </h3>
                  <p className="mt-[25px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing dui tellus commodo convallis. Auctor eget orci
                    pharetra non.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
