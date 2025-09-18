import React from "react";

function CTA(props) {
  return (
    <div className="cta-outer bg-[url('/CTC.png')] bg-cover bg-center bg-no-repeat py-[80px] sm:p-[20px]">
      <div className="container">
        <div className="cta-inner w-full w-[40%] w-full mx-auto py-[45px]">
          <h4 className="lg:w-[500px] lg:text-[30px] text-2xl">
            {props.title}
          </h4>
          <p className="cta-inner mt-[20px] sm:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            dui tellus commodo convallis.
          </p>
          <button className="bg-black text-white pl-[10px] pr-[10px] pt-[5px] pb-[5px] mt-[20px]">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
