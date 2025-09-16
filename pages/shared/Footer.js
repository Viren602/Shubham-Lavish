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
        <div className="w-full max-w-[1263px] bg-gray-100 mx-auto">
          <div className=" mt-[100px] pt-[50px] flex gap-[50px] justify-evenly mb-[60px]">
            <div className="w-[319px]">
              <p className="mt-[50px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing dui tellus commodo convallis. Auctor eget orci
                pharetra non. Integer lorem in scelerisque tortor dui tempor,
                volutpat viverra faucibus.
              </p>
            </div>
            <div className="99px">
              <h6>About</h6>
              <ul className="mt-[20px]">
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Sho</li>
              </ul>
            </div>
            <div className="180px">
              <h6>Office</h6>
              <ul className="mt-[20px]">
                <li>Scandinavian design</li>
                <li>Smart House</li>
                <li>Modern Design</li>
                <li>Minimalist Design</li>
              </ul>
            </div>
            <div>
              <h6 className="mb-[30px]">Stay Tuned for upadates</h6>
              <input type="text" placeholder="Email" />
              <ul>
                <li className="flex gap-[25px] mt-[30px]">
                  <img src="instagram.png" />
                  <img src="youtube.png" />
                  <img src="twitter.png" />
                  <img src="facebook.png" />
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className="text-center mt-[10px]">
            <p>imh @ 2022. All Rights Reserved.</p>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}
