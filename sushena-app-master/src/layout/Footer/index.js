import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer
 */
function Footer() {
  return (
    <div className="bg-primary-pink-light border-t w-full py-6 md:py-14 space-x-10 flex flex-row items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex flex-col md:flex-row justify-between w-full">
          <div className="flex justify-center md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
            <div className="flex-shrink-0 flex items-center bg-white rounded-lg">
              <a href="/">
                <img
                  className="block h-10 w-auto rounded-lg"
                  src="/assets/logo/logoFull.svg"
                  alt="logo"
                />
              </a>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center justify-end">
            <Link
              to="/"
              className="md:ml-6 transition transform ease-in-out duration-150 hover:scale-105 inline-flex font-roboto items-center px-4 py-2 text-base font-medium text-neutral-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Refund Policy
            </Link>
            <Link
              to="/"
              className="md:ml-6 transition transform ease-in-out duration-150 hover:scale-105 inline-flex font-roboto items-center px-4 py-2 text-base font-medium text-neutral-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Private Policy
            </Link>
            <Link
              to="/aboutUs"
              className="md:ml-6 transition transform ease-in-out duration-150 hover:scale-105 inline-flex font-roboto items-center px-4 py-2 text-base font-medium text-neutral-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
