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
          <div className="flex justify-between items-center">
            <div>
              <img src="" alt="Logo" className="ls w-[100px] h-[100px]"></img>
            </div>
            <div className="flex items-center gap-[50px]">
              <Link href="/">
                <a>Home</a>
              </Link>

              <Link href="/">
              <a>ABOUT US</a>
              </Link>

              <Link href="/">
                <a>SERVICES</a>
              </Link>

              <Link href="/">
                <a>BLOG</a>
              </Link>
            </div>
            <div className="flex justify-center items-center py-[11px] px-[25px] border border-black h-fit">
              <Link href="/" >
                <a className="flex gap-[10px] items-center">
                  home <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
