import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "helpers/utils/classNames";
import { Link, useRouteMatch } from "react-router-dom";

const navigation = [
  { name: "About Us", href: "/aboutUs" },
  { name: "Donate Now", href: "/donationForm" },
];

export default function Navigation() {
  const selectedRoute = useRouteMatch();
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white lg:static lg:overflow-y-visible py-4 md:py-10"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between h-10">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/">
                      <img
                        className="block h-9 md:h-10 w-auto"
                        src="/assets/logo/logoFull.svg"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end">
                  <Link
                    to="/aboutUs"
                    className="ml-6 transition transform ease-in-out duration-150 hover:scale-105 inline-flex font-roboto items-center px-4 py-2 text-base font-medium text-neutral-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/donationForm"
                    className="ml-6 transition transform ease-in-out duration-150 hover:scale-105 inline-flex font-roboto bg-primary-pink-medium items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item?.href}
                    className={classNames(
                      selectedRoute?.path === item?.href
                        ? "bg-primary-pink-medium text-white"
                        : "hover:bg-neutral-gray-100",
                      "block rounded-md text-sm text-neutral-gray-800 font-dmSans py-2 px-3 font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
