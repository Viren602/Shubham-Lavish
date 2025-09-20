import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="w-full bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-6 pt-[60px]">
            <div className="flex flex-col lg:flex-row gap-[80px] justify-between mb-10">
              <div className="lg:w-[400px] md:w-[600px]">
                <p className="text-sm md:text-[12px] lg:text-[16px] lg:mt-[115px] lg:ml-[30px] h-[40px] lh-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing dui tellus commodo convallis. Auctor eget orci
                  pharetra non. Integer lorem in scelerisque tortor dui tempor,
                  volutpat viverra faucibus.
                </p>
              </div>
              <hr className="lg:hidden  mb-[-60px] mt-[20px]"/>
              <div className="flex flex-col lg:flex-row md:gap-10 lg:gap-20">
                <div className="mb-6 md:mb-0">
                  <span className="font-semibold text-lg md:text-xl">About</span>
                  <ul className="space-y-2 text-gray-800 font-semibold text-sm md:text-base">
                    <li className="mt-2 lg:mt-4">About Us</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>Shop</li>
                  </ul>
                </div>
                <div className="mb-[-20px]">
                  <span className="font-semibold text-lg md:text-xl mb-2 md:mb-2 block">Office</span>
                  <ul className="space-y-2 text-gray-800 font-semibold text-sm md:text-base">
                    <li className="mt-2 lg:mt-4">Scandinavian Design</li>
                    <li>Smart House</li>
                    <li>Modern Design</li>
                    <li>Minimalist Design</li>
                  </ul>
                </div>
              </div>

              <div className="md:w-1/4 md:mt-[-35px] lg:mt-[0]">
                <span className="font-semibold text-[18px]">Stay Tuned for Updates</span>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Email"
                    className="placeholder-gray-700 text-[15px] border-b-[1.5px] lg:w-[190px] md:w-[90px] outline-none border-gray-950 px-3 py-2 bg-gray-100 my-4"
                  />
                  <i className="fi fi-rr-arrow-small-right bg-gray-800 text-white px-[12px] mt-[16px]"></i>
                </div>
                
                <ul>
                  <li className="flex gap-4">
                    <i className="fi fi-brands-instagram w-[24px] h-[24px]"></i>
                    <i className="fi fi-brands-youtube w-[24px] h-[24px]"></i>
                    <i className="fi fi-brands-twitter w-[24px] h-[24px]"></i>
                    <i className="fi fi-brands-facebook w-[24px] h-[24px]"></i>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="text-center py-4 text-gray-500 text-sm">
              <p>imh © 2022. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
