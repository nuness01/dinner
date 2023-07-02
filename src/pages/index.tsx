import type { NextPage } from "next";

import Image from "next/image";
import heroImg from "../assets/hero.webp";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap ">
        <div className="flex  w-full items-center lg:w-1/2 ">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white  dark:text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Bem-vindo ao Dinner
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-300  dark:text-gray-500 lg:text-xl xl:text-2xl">
              No Dinner, acreditamos que cada refeição é uma experiência única e
              memorável. Estamos emocionados em recebê-lo em nosso website, onde
              você pode fazer reservas e descobrir um mundo de sabores
              requintados.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <Link
                href="/calendar"
                className="rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white hover:bg-indigo-900 "
              >
                Reserve Agora
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-6 lg:w-1/2">
          <Image
            src={heroImg}
            width="420"
            className={"hidden object-cover md:flex"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
