import React, { Component } from "react";
import CTA from "../../components/reuseSection/CTA";
import Latest_project from "../../components/reuseSection/latest_project";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="home-page">
          <div className="banner bg-white">
            <div className="container">
              <div className="inner flex flex-col md:flex-row items-center gap-10 mt-6">
                <div className="w-full md:w-1/2 text-left md:text-left">
                  <h1 className="text-3xl lg:text-5xl md:text-2xl font-bold mt-6">
                    Create A Modern And Unique Design Your <br /> Dream
                  </h1>
                  <p className="mt-4 text-gray-600">
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
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="home-page-inner mx-auto px-4 mt-10">
            <div className="container">
              <div>
                <div className="text-center">
                  <h2 className="text-lg md:text-xl">
                    Trusted By <span className="font-bold">75+ Partners</span>
                  </h2>
                </div>
                <div className="mt-6">
                  <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
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
              <div className="frame-inner flex flex-col lg:flex-row mt-12 gap-10">
                <div className="relative flex gap-6">
                  <div>
                    <img src="frame-image.png" className="w-full rounded-lg" />
                  </div>
                  <div className="relative">
                    <img src="hall-image.png" className="w-full rounded-lg" />
                    <div className="absolute my-[20px] lg:mx-[-40px] mx-[-20px]">
                      <img
                        src="frame-info.png"
                        className="w-[800px] rounded-lg lg:mx-[-30px] sm:mx-[-40px] mx-[-14px] my-[-10px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-14 text-left lg:text-left">
                  <h6 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                    ---- HELLO THERE
                  </h6>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
                    We work professionally <br className="hidden lg:block" />
                    and wholeheartedly
                  </h1>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing dui tellus commodo convallis. Auctor eget orci
                    pharetra non. Integer lorem in scelerisque tortor dui
                    tempor, volutpat viverra faucibus. Sagittis maecenas
                    tincidunt at purus. Amet non vel elit aliquet id dolor risus
                    imperdiet vitae. Amet, sagittis mauris morbi erat velit id
                    nullam. Lorem ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="container">
              <div className="services-inner mt-[90px] flex-col md:flex-row items-center gap-10 mt-6">
                <h6>Services</h6>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-[10px] w-full text-center md:text-left ">
                  Our capacity to help make your wishes come true
                </h3>
                <div className="mt-[20px]">
                  <ul className="flex lg:flex-row gap-4 flex-col">
                    <li>
                      <img
                        src="interior design.png"
                        className="w-full sm:w-auto rounded-lg"
                      />
                    </li>
                    <li>
                      {" "}
                      <img
                        src="Architecture.png"
                        className="w-full sm:w-auto rounded-lg"
                      />
                    </li>
                    <li>
                      <img
                        src="Furniture Design.png"
                        className="w-full sm:w-auto rounded-lg"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="latest-project">
            <div className="container">
              <div className="latest-project-inner mt-[90px]">
                <h6 className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-bold">
                  Our Project
                </h6>
                <h3 className="mt-[10px] sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  Our Latest Projects
                </h3>
                <div className="static mt-[20px]">
                  <img src="Furniture.png" /> */}
                  {/* <h6 className="absolute lg:text-[25px] top-[3220px] left-[20px] sm:top-[2300px] md:top-[2300px] lg:left-[100px] text-white">Hanani Home</h6>
                  <p className="absolute top-[3250px] left-[20px] sm:left-[30px] md:left-[100px] sm:top-[2300px] md:top-[2350px] text-white w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non.</p> */}
                {/* </div>
              </div>
            </div>
          </div> */}
          <Latest_project/>

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
          <CTA 
          title = "Have A Question ? Start Consultation Now"/>

          <div className="blog">
            <div className="container">
              <div className="blog-inner mt-[90px] my-[80px]">
                <h6>Our Blog</h6>
                <h3 className="mt-2 text-2xl lg:text-5xl font-bold">
                  Latest News and Articles
                </h3>
                <div className="md:flex gap-[40px]">
                  <div className="my-[50px]">
                    <img src="Design1.png" />
                    <h6 className="mt-[8px]">interior Design</h6>
                    <h3 className="text-2xl lg:text-5xl">
                      Designer must be an interpreter
                    </h3>
                    <p className="mt-[25px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Adipiscing dui tellus commodo convallis. Auctor eget orci
                      pharetra non.
                    </p>
                  </div>
                  <div className="my-[50px]">
                    <img src="Design2.png" />
                    <h6 className="mt-[8px]">interior Design</h6>
                    <h3 className="text-2xl lg:text-5xl">
                      12 Best Outdoor Furniture Ideas
                    </h3>
                    <p className="mt-[25px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Adipiscing dui tellus commodo convallis. Auctor eget orci
                      pharetra non.
                    </p>
                  </div>
                  <div className="my-[50px]">
                    <img src="Design3.png" />
                    <h6 className="mt-[8px]">interior Design</h6>
                    <h3 className="text-2xl lg:text-5xl">
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
  }
}
export default Home;
