import Image from "next/image";
import React from "react";
import cafeImg from "../assets/cafe.jpg";
import drinkImg from "../assets/restaurant.jpg";
import resImg from "../assets/healthy.jpg";

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <div className="px-36">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 pl-3 sm:py-4">
                    <Image
                      src={cafeImg}
                      width={190}
                      height={225}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 pl-3 sm:py-4">
                  <Image
                      src={drinkImg}
                      width={190}
                      height={225}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                  <Image
                      src={resImg}
                      width={190}
                      height={225}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-center text-3xl font-bold text-gray-800 md:text-5xl ">
                    Sobre Nós
                  </h1>
                  <p className="mt-6 w-full text-center text-base leading-6 text-gray-600 sm:w-96 ">
                    Bem-vindo ao Dinner - onde a gastronomia ganha vida! Nós
                    somos um restaurante que se orgulha em proporcionar uma
                    experiência única aos nossos clientes.
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
                    <p className=" w-full text-center text-base leading-6  text-gray-600 sm:w-96">
                      Valorizamos a qualidade dos ingredientes e o sabor
                      incrível, sem comprometer a acessibilidade.
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
                    <p className=" w-full text-center text-base leading-6  text-gray-600 sm:w-96">
                      Facilitamos o processo de reserva. Com apenas alguns
                      cliques, você pode garantir seu lugar para uma noite
                      especial ou até mesmo para um almoço de negócios.
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
                      Oferecemos um menu dinâmico e fácil de navegar, tanto no
                      restaurante quanto em nosso site. Além de deliciosos
                      pratos que agradam a todos os paladares, também garantimos
                      que o processo de reserva no site seja rápido e simples.
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
                      Estamos sempre em busca de maneiras criativas de
                      surpreender nossos clientes e tornar a sua experiência
                      ainda mais memorável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
