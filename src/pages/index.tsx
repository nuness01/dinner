import type { NextPage } from "next";

import Image from "next/image";
import dinner from "../assets/chef.png";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-center gap-72  ">
        <Image src={dinner} className="hidden md:flex  w-1/6 " alt="dinner" />
        <div className=" mt-48 max-w-xl pt-24 text-slate-950">
          <h1 className="text-6xl font-semibold leading-normal ">
            Bem-Vindo ao<br></br>Dinner
          </h1>
          <p>
            Bem-vindos ao nosso novo e emocionante restaurante! É com grande
            prazer que abrimos as nossas portas para recebê-los nesta jornada
            culinária única. Estamos ansiosos para compartilhar com vocês uma
            experiência gastronômica excepcional, repleta de sabores deliciosos
            e momentos inesquecíveis.
          </p>
          <div className="mt-10">
            <Link
              href="/calendar"
              className="mr-4 inline-block rounded-3xl hover:bg-blue-950 px-8 py-3 font-medium duration-75 border border-blue-950 hover:text-white"
            >
              Reserve Já
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
