import React from "react";
import github from "../assets/github.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-[15em] bg-[#080808] mt-[6em] flex flex-col justify-evenly p-10  text-center gap-6 text-white">
        <a href="" className="hover:scale-125 transition-all w-[10em] mx-auto">
          Made by Sebastian
        </a>
        <a href="https://github.com/sbastin1" target="_blank">
          <div className="flex items-center justify-center transition-all w-[10em] mx-auto hover:scale-125 cursor-pointer">
            My Github
            <Image
              src={github}
              alt=""
              height={25}
              width={25}
              className="ml-4"
            />
          </div>
        </a>
      </footer>
    </>
  );
}
