import Image from "next/image";
import React from "react";
import go from "../assets/technologies/go.svg";
import java from "../assets/technologies/java.svg";
import jquery from "../assets/technologies/jquery.svg";
import stripe from "../assets/technologies/stripe.svg";

export default function Interests() {
  const interests = [
    {
      id: 1,
      logo: go,
      name: "Golang",
      usage: "Backend API and CLI applications",
    },
    {
      id: 2,
      logo: java,
      name: "Java",
      usage: "Backend API and web scraping",
    },
    {
      id: 3,
      logo: jquery,
      name: "jQuery",
      usage: "Used in lots of codebases",
    },
    {
      id: 4,
      logo: stripe,
      name: "Stripe",
      usage: "E-Commerce Payments",
    },
  ];

  return (
    <>
      <h1
        id="interests"
        className="text-center mt-[4em] text-white text-4xl font-bold"
      >
        Interests
      </h1>
      <div>
        <h2 className="text-white text-center mt-[3em] text-xl">
          Things i dont know yet but want to learn in the future:
        </h2>
        <div className="mt-10 relative">
          {interests.map((interest) => (
            <li
              key={interest.id}
              className="text-white flex justify-left items-center gap-4 mb-6 w-[32.3em] m-auto"
            >
              <Image
                src={interest.logo}
                alt=""
                height={50}
                width={50}
                className="hover:scale-150 transition-all"
              />
              <h1 className="w-[5em]">{interest.name}</h1>
              <div className="whitespace-nowrap">--</div>
              <p>{interest.usage}</p>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
