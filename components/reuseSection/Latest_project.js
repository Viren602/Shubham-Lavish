import React from 'react'

const Latest_project = () => {
  return (
    <div className="latest-project">
      <div className="container">
        <div className="latest-project-inner my-[90px]">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-semibold flex items-center gap-[20px]">
            Our Project <p className="h-[2px] w-[70px] bg-gray-800 mr-[10px] mt-[5px]"></p>
          </span>
          <h2 className="text-[23px] sm:text-3xl lg:text-4xl font-bold leading-snug my-4">
             Our Latest Project</h2>
          <div className="static mt-[20px]">
            <img src="Furniture.png" />
            {/* <h6 className="absolute lg:text-[25px] top-[3220px] left-[20px] sm:top-[2300px] md:top-[2300px] lg:left-[100px] text-white">Hanani Home</h6>
            <p className="absolute top-[3250px] left-[20px] sm:left-[30px] md:left-[100px] sm:top-[2300px] md:top-[2350px] text-white w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non.</p> */}
          </div>
        </div>
      </div>
      </div>
  )
}

export default Latest_project
