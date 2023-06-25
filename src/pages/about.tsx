import React from "react";
import about from "../assets/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:items-stretch">
      <div className="flex flex-col items-center justify-center sm:w-1/2 md:mr-6 md:items-end md:py-20 lg:mr-20 xl:mr-28 xl:w-1/2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold text-gray-800 md:text-5xl ">
            Sobre Nós
          </h1>
          <p className="mt-6 w-full text-center text-base leading-6 text-gray-600 sm:w-96 ">
            A phrase is a short selection of words which when put together
            create a concept.
          </p>
          <div className="mt-12 flex flex-col items-center md:mt-14">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow"
              role="img"
              aria-label="money"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg1.svg"
                alt="money"
              />
            </div>
            <p className="mt-6 w-full text-center text-base leading-6  text-gray-600 sm:w-96">
              A phrase is a short selection of words which when put together
              create a concept. There are eight types of phrases.
            </p>
          </div>
          <div className="mt-7 flex flex-col items-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow"
              role="img"
              aria-label="phone"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg2.svg"
                alt="phone"
              />
            </div>
            <p className="mt-6 w-full text-center text-base leading-6  text-gray-600 sm:w-96">
              A phrase is a short selection of words which when put together
              create a concept.
            </p>
          </div>
          <div className="mt-7 flex flex-col items-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow"
              role="img"
              aria-label="ideas"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg3.svg"
                alt="app"
              />
            </div>
            <p class="mt-6 w-full text-center text-base leading-6  text-gray-600 sm:w-96">
              Whether article spirits new her covered hastily sitting her. Money
              witty
            </p>
          </div>
          <div className="mt-7 flex flex-col items-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow"
              role="img"
              aria-label="bright ideas"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg4.svg"
                alt="bulb"
              />
            </div>
            <p className="mt-6 w-full text-center text-base leading-6  text-gray-600 sm:w-96">
              A phrase is a short selection of words which when put together
              create a concept.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 sm:w-1/2 lg:w-1/3 xl:w-1/2">
        <Image
        width={550} 
        height={956}
          src={about}
          alt="restaurante"
          class="hidden h-full rounded-md object-cover object-center md:block"
        />
      </div>
    </div>
  );
};

export default About;
