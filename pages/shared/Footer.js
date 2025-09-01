import React, { Component } from "react";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="flex flex-col gap-[120px] my-auto justify-between items-center">
            <div className="flex justify-between items-start  gap-[100px]">
              <div className="my-auto w-[40%]">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.Adipiscing dui tellus commodo convallis. Auctor eget orci
                  pharetra non. Integer lorem in scelerisque tortor dui tempor,
                  volutpat viverra faucibus.
                </p>
              </div>
              <div className="flex flex-col ">
                <h5 className="mb-[25px]">About</h5>
                <div className="flex flex-col">
                  <Link href="/">
                    <a className="font-bold">ABOUT US</a>
                  </Link>

                  <Link href="/">
                    <a className="font-bold">SERVICES</a>
                  </Link>

                  <Link href="/">
                    <a className="font-bold">PORTFOLIO</a>
                  </Link>

                  <Link href="/">
                    <a className="font-bold">CONTACT US</a>
                  </Link>

                  <Link href="/">
                    <a className="font-bold">BLOG</a>
                  </Link>

                  <Link href="/">
                    <a className="font-bold">SHO</a>
                  </Link>
                </div>
              </div>
              <div className="flex gap-[60px]">
                <div className="flex flex-col gap-3">
                  <h5>Office</h5>
                  <div></div>
                  <p className="font-bold">
                    Scandinavian design Smart House Modern Design Minimalist
                    Design
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <h5>Stay Tuned for upadates</h5>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Email"
                      className="border-b-2 border-black bg-transparent px-2 py-2 text-lg outline-none"
                    />
                    <button className="bg-black text-white px-4 py-2">
                      <a clasName="">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </button>
                  </div>
                  <div className=" flex gap-[30px]">
                    <a className="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className="">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a className="">
                      <FontAwesomeIcon icon={faSquareTwitter} />
                    </a>
                    <a className="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-sm text-gray-500 mt-6 border-t border-gray-300 pt-4 w-full">
              <p className="">Imah © 2022. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
