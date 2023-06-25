import Link from "next/link";
import logo from "../assets/logo-nav.svg";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector("div.mobile-menu");

    const handleMenuButtonClick = () => {
      menu?.classList.toggle("hidden");
    };

    btn?.addEventListener("click", handleMenuButtonClick);

    return () => {
      btn?.removeEventListener("click", handleMenuButtonClick);
    };
  }, [router]);
  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="logo" />
        </Link>

        <div className="flex md:order-2">
          <Link href="/calendar">
            <button
              type="button"
              className="mr-3 rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:bg-indigo-600 md:mr-0"
            >
              Reserve Agora
            </button>
          </Link>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <Link
                href="/"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Sobre Nós
              </Link>
            </li>
            
            <li>
              <Link
                href="/contact"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contacte-nos
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:hidden">
          <button className="mobile-menu-button ">
            <svg
              id="SvgjsSvg1001"
              width="25"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs id="SvgjsDefs1002"></defs>
              <g id="SvgjsG1008">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -5.5 21 21"
                  width="30"
                  height="30"
                >
                  <path
                    fill="#ffffff"
                    fillRule="evenodd"
                    d="M123,55 L144,55 L144,53 L123,53 L123,55 Z M123,47 L144,47 L144,45 L123,45 L123,47 Z M123,51 L144,51 L144,49 L123,49 L123,51 Z"
                    transform="translate(-123 -45)"
                    className="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="mobile-menu hidden bg-gray-900 text-white ">
        <Link
          href="/"
          className="block  px-4 py-2 text-sm hover:bg-gray-500"
          aria-current="page"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="0 block px-4 py-2 text-sm hover:bg-gray-500"
        >
          Sobre
        </Link>

        <Link
          href="/contact"
          className="block  px-4 py-2 text-sm hover:bg-gray-500"
        >
          Contactos
        </Link>
      </div>
    </nav>
  );
}
