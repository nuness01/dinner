import type { NextPage } from "next";
import Image from "next/image";
import dinner from "../assets/dinner.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Image src={dinner} className=" z-auto max-w-full	" alt="dinner" />
    </>
  );
};

export default Home;
