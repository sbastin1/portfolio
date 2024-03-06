import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <div id="about" />
      <HamburgerMenu />

      <nav className="xl:flex justify-evenly hidden mt-[3em] w-[50em] ml-auto translate-x-[6.4em] transition-all loadIn">
        <a href="#about" className="text-white text-3xl tasse">
          About
        </a>
        <a href="#projects" className="text-white text-3xl tasse">
          Projects
        </a>
        <a href="#interests" className="text-white text-3xl tasse">
          Interests
        </a>
      </nav>
    </>
  );
}
