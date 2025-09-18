import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="w-full bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-10 justify-between mb-10">
              <div className="md:w-1/3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing dui tellus commodo convallis. Auctor eget orci
                  pharetra non. Integer lorem in scelerisque tortor dui tempor,
                  volutpat viverra faucibus.
                </p>
              </div>
              <div>
                <span className="font-semibold mb-4 text-xl">About</span>
                <ul className="space-y-2 text-gray-600">
                  <li className="my-[10px]">About Us</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Contact Us</li>
                  <li>Blog</li>
                  <li>Shop</li>
                </ul>
              </div>
              <div>
                <span className="font-semibold mb-4 text-xl">Office</span>
                <ul className="space-y-2 text-gray-600">
                  <li className="my-[10px]">Scandinavian Design</li>
                  <li>Smart House</li>
                  <li>Modern Design</li>
                  <li>Minimalist Design</li>
                </ul>
              </div>
              <div className="md:w-1/4">
                <span className="font-semibold text-xl">Stay Tuned for Updates</span>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md my-4"
                />
                <ul>
                  <li className="flex gap-4">
                    <img src="instagram.png" alt="Instagram" className="w-6 h-6" />
                    <img src="youtube.png" alt="YouTube" className="w-6 h-6" />
                    <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
                    <img src="facebook.png" alt="Facebook" className="w-6 h-6" />
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
