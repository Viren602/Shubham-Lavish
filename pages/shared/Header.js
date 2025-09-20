import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="w-[100px]">
            <img src="Zyden-logo.png"/>
          </div>
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            {/* <input type="checkbox" id="menu-toggle" className="peer hidden" /> */}
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer flex flex-col space-y-1"
            >
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
            </label>

            <div
              className={`absolute left-0 top-16 w-full bg-white shadow-md rounded-lg transition-all duration-300 ease ${
                toggle ? "hidden" : "block"
              }`}
              style={{ height: toggle ? "0px" :"calc(100vh - 46px)"}}
            >
              <ul className="flex flex-col items-center space-y-4 py-4 h-[100%] justify-evenly">
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT US</Link>
                </li>
                <li>
                  <Link href="/project">PROJECTS</Link>
                </li>
                <li>
                  <Link href='/contact'><button className="text-gray-600 px-4 py-2 rounded-lg">
                    CONTACT US
                  </button></Link>
                </li>
              </ul>
            </div>
          </div>

          <nav className="hidden md:flex gap-[300px] items-center">
            <div className="flex gap-[25px] font-semibold xl-[50px] md:mx-[-189px] lg:mx-[-70px] xl:mx-[50px] sm-[200px]">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT US</Link>
              <Link href="/project">PROJECT</Link>
            </div>
            <div>
              <Link href='/contact'><button className="text-gray-950 px-4 py-2 border-2 border-gray-700 flex gap-3.5">
                CONTACT US
                <img src="next.png" className="w-[20px]"/>
              </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
