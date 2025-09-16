import React, { Component } from "react";
import Link from "next/link";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-inner flex items-center justify-between">
            <div>
              <img src="Zyden-logo.png" className="h-[60px] w-auto" />
            </div>
            <ul class="flex space-x-4">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <Link href="/services">SERVICES</Link>
              </li>
              <li>
                <Link href="/blog">BLOG</Link>
              </li>
            </ul>
            <div>
              <button>CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
