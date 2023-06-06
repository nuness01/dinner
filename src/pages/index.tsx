import type { NextPage } from "next";

import Image from "next/image";
import dinner from "../assets/dinner2.jpg";

const Home: NextPage = () => {
  
  return (
    <>
    <div >
      <Image src={dinner} className=" mx-auto z-auto max-w-full	" alt="dinner" />
      <button onClick={() => router.push("/about")}></button>
      </div>
     
    </>
  );
};

export default Home;
