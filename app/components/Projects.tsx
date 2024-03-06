import Image from "next/image";
import React from "react";
import shortener from "../assets/shortener.png";

import html from "../assets/technologies/html.svg";
import css from "../assets/technologies/css.svg";
import typescript from "../assets/technologies/typescript.svg";
import react from "../assets/technologies/react.svg";
import nextjs from "../assets/technologies/nextjs.svg";
import prisma from "../assets/technologies/prisma.svg";
import tailwindcss from "../assets/technologies/tailwindcss.svg";
import nginx from "../assets/technologies/nginx.svg";
import arrow from "../assets/arrowDown.svg";

export default function Projects() {
  return (
    <>
      <h1
        id="projects"
        className="text-center mt-[3em] text-white text-4xl font-bold"
      >
        Projects
      </h1>
      <div className="text-center m-auto text-white mt-[3em]">
        <a href="https://url.venatric.com" target="_blank">
          <h2 className="text-2xl">URL Shortener</h2>
          <h3 className="opacity-90 text-gray-400 italic text-sm">
            responsive full crud application
          </h3>
          <h3 className="opacity-90 text-gray-400 italic text-sm">
            Might not be online yet. Sourcecode is on Github
          </h3>
          <Image className="mt-10 mb-10 rounded-2xl " src={shortener} alt="" />
        </a>
        <p>Technologies used:</p>
      </div>
      <div className="flex justify-evenly m-auto mt-6">
        <Image
          className="hover:scale-150 transition-all"
          src={html}
          alt=""
          height={40}
          width={40}
        />

        <Image
          className="hover:scale-150 transition-all"
          src={css}
          alt=""
          height={40}
          width={40}
        />
        <Image
          className="hover:scale-150 transition-all"
          src={typescript}
          alt=""
          height={40}
          width={40}
        />
        <Image
          className="hover:scale-150 transition-all"
          src={react}
          alt=""
          height={40}
          width={40}
        />
        <Image
          className="hover:scale-150 transition-all"
          src={nextjs}
          alt=""
          height={60}
          width={60}
        />
        <Image
          className="hover:scale-150 transition-all"
          src={tailwindcss}
          alt=""
          height={40}
          width={40}
        />
        <Image
          className="hover:scale-150 transition-all"
          src={prisma}
          alt=""
          height={40}
          width={40}
        />
        <Image
          className="hover:scale-150 transition-all"
          src={nginx}
          alt=""
          height={40}
          width={40}
        />
      </div>
      <a href="#interests">
        <Image
          src={arrow}
          alt=""
          height={110}
          className="m-auto mt-[15em] bounceAnim xl:mt-[4em]"
        />
      </a>
    </>
  );
}
