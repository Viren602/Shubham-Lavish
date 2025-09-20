import React from "react";

function CTA(props) {
  return (
    <div className="cta-outer bg-[url('/CTC.png')] md:w-[0px] lg:w-full bg-cover bg-center bg-no-repeat py-[80px] sm:p-[20px]">
      <div className="container">
        <div className="cta-inner w-full w-[40%] w-full mx-auto py-[45px]">
          <h4 className="lg:w-[500px] text-xl  lg:text-4xl  text-gray-700 font-bold">
            {props.title}
          </h4>
          <p className="cta-inner mt-[20px] text-[12px] lg:w-[500px] w-[229px] lg:text-[18px] text-gray-7  00">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis.
          </p>
          <button className="bg-black text-white pl-[10px] pr-[15px] pt-[5px] flex gap-[15px] pb-[5px] mt-[20px] font-poppins">
            CONTACT US <span><i className="fi fi-bs-arrow-up-right text-xs"></i></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
