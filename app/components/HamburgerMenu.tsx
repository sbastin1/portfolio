"use client";

import React, { useState } from "react";
import hamburger from "../assets/Hamburger.svg";
import Image from "next/image";
import close from "../assets/close.svg";

export default function HamburgerMenu() {
  const [isBackgroundColor, setIsBackgroundColor] = useState({
    backgroundColor: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseDown = () => {
    setIsBackgroundColor({ backgroundColor: "#292929" });
  };

  const handleMouseUp = () => {
    setIsBackgroundColor({ backgroundColor: "#161616" });
  };

  const handleMouseEnter = () => {
    setIsBackgroundColor({ backgroundColor: "#161616" });
    console.log("ENTERED");
  };

  const handleMouseLeave = () => {
    setIsBackgroundColor({ backgroundColor: "inherit" });
  };

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="flex justify-evenly items-center max-w-[30em] m-auto mt-[3em] xl:hidden">
        <h1 className="text-white greenBarXL text-3xl">Sebastian Wilden</h1>
        <Image
          src={hamburger}
          alt=""
          width={75}
          height={75}
          className={`  transition-all rounded-3xl
        ${isOpen ? "hidden" : ""}`}
          style={isBackgroundColor}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
      </div>
      <div
        className={`top-0 absolute w-full h-[50em]  transition-all right-0 z-10 bg-[#0C0C0C]
        ${isOpen ? "top-0" : "top-[-50em]"} `}
      >
        <div className="max-w-[50em]">
          <Image
            src={close}
            alt=""
            width={75}
            height={75}
            className={`mt-[3em] relative  transition-all rounded-3xl ml-auto mr-[1em] p-2`}
            style={isBackgroundColor}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
        </div>
        <nav className="flex flex-col justify-between text-center h-[25em] text-white mt-[5em] xl:hidden ">
          <a href="#about" className="list-none font-bold text-5xl">
            About
          </a>
          <a href="#projects" className="list-none font-bold text-5xl">
            Projects
          </a>
          <a href="#interests" className="list-none font-bold text-5xl">
            Interests
          </a>
        </nav>
      </div>
    </>
  );
}
