import Link from "next/link";
import logo from "../assets/logo-nav.svg";
import Image from "next/image";


const index = () => {

  return (
    
      <footer id="footer" className="relative z-50 dark:bg-gray-900">
        <div className=" border-b border-t border-gray-200 py-7 dark:border-gray-700">
          <div className="container mx-auto px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="mb-16 flex w-full lg:mb-0 lg:w-1/2">
                <div className="w-full px-6 lg:w-1/2">
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        <p className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm">
                          Components
                        </p>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <p className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm">
                          Templates
                        </p>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <p className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm">
                          Pricing
                        </p>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <p className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm">
                          FAQ
                        </p>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link
                        href="javascript:void(0)"
                        className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm"
                      >
                        Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-6 lg:w-1/2">
                  <ul>
                    <li>
                      <Link href="javascript:void(0)">
                        <p className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm">
                          Free components
                        </p>
                      </Link>
                    </li>

                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <p className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm">
                          Blog
                        </p>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <p className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm">
                          Changelog
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-full lg:w-1/2">
                <div className="w-full px-6 lg:w-1/2">
                  <ul>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className="mt-6">
                      <Link href="javascript:void(0)">
                        <p className="hover:text-brand dark:hover:text-brand text-xs leading-none text-gray-800 dark:text-gray-50 lg:text-sm">
                          Terms of service
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex w-full flex-col justify-between px-6 lg:w-1/2">
                  <div className="mb-6 flex items-center">
                    <a href="javascript:void(0)">
                      <div className="hover:text-brand dark:hover:text-brand cursor-pointer text-gray-800 dark:text-gray-50 ">
                        <svg
                          className="footer-icon feather feather-github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)">
                      <div className="pl-4">
                        <svg
                          className="footer-icon feather feather-twitter hover:text-brand dark:hover:text-brand cursor-pointer text-gray-800 dark:text-gray-50 "
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-7">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo}  alt="logo" />
        </Link>

          <p className="mt-6 text-xs leading-none text-gray-900 dark:text-gray-50 lg:text-sm">
          © 2023 Dinner™. All Rights Reserved.
          </p>
        </div>
      </footer>
    
  );
};
export default index;
