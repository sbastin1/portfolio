import Image from "next/image";
import React from "react";
import arrow from "../assets/arrowDown.svg";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="text-white text-center mt-16">
        <div className="xl:flex xl:items-center xl:gap-[30em] xl:mt-[9em]">
          <h1 className="text-3xl w-[8.3em] m-auto xl:text-4xl loadIn  greenBarXL whitespace-nowrap ">
            Sebastian Wilden
          </h1>
          {/* <div className="h-[10px] bg-green-500 w-[15.1em] m-auto greenBar xl:hidden" /> */}
          <div className="flex flex-col gap-10 mt-36 max-w-[30em] loadIn m-auto xl:mt-0 xl:w-[26em] xl:text-xl">
            <p>
              Hey! I’m Sebastian, born and raised in Germany. At the age of 8
              years I got my first computer and the journey began. I did
              everything from building my own computer to coding a trading bot
              in Python.
            </p>
            <p>
              At first I found the idea of building and maintaining servers
              quite interesting. Until I realised an idea is not enough.
            </p>
            <p>
              For my second apprenticeship I wanted something that really suits
              me. I wasn’t satisfied with an idea anymore, I truly wanted to
              experience it.
            </p>
            <p>
              Therefore I learned how to build websites with React / NextJS,
              work with APIs and SQL databases / ORMs.{" "}
            </p>
          </div>
        </div>
        <a href="#projects">
          <Image
            src={arrow}
            alt=""
            height={110}
            width={110}
            className="m-auto mt-32 bounceAnim xl:mt-[4em] xl:w-[110px]"
          />
        </a>
      </div>
    </>
  );
}
