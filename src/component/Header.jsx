import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrolled(prevScrollPos < currentScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isActive = (path) => {
    
    return window.location.pathname === path;
  };

  return (
    <>
      <nav
        className={`px-12 bg-[#FF6600] transition-all duration-300 ease-in-out fixed w-full z-10 ${
          isScrolled ? "-translate-y-full" : ""
        }`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/logo.png" className="w-24" alt="Suitmedia Logo" />
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a
                  href="/work"
                  className={`block py-2 px-3 md:hover:text-black md:p-0 text-white  relative ${
                    isActive("/work") ? "text-blue-700 underline" : ""
                  }`}>
                  <span className="relative inline-block mb-3">
                    Work
                    {isActive("/work") && (
                      <span className="absolute bottom-0 left-0 right-0 h-2 border-b-2 border-white"></span>
                    )}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`block py-2 px-3 md:hover:text-black md:p-0 text-white  relative${
                    isActive("/about") ? "text-blue-700 underline" : ""
                  }`}>
                  <span className="relative inline-block mb-3">
                    About
                    {isActive("/about") && (
                      <span className="absolute bottom-0 left-0 right-0 h-2 border-b-2 border-white"></span>
                    )}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className={`block py-2 px-3 md:hover:text-black md:p-0 text-white  relative${
                    isActive("/services") ? "text-blue-700 underline" : ""
                  }`}>
                  <span className="relative inline-block mb-3">
                    Services
                    {isActive("/services") && (
                      <span className="absolute bottom-0 left-0 right-0 h-2 border-b-2 border-white"></span>
                    )}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/ideas"
                  className={`block py-2 px-3 md:hover:text-black md:p-0 text-white  relative${
                    isActive("/ideas") ? "text-blue-700 underline" : ""
                  }`}>
                  <span className="relative inline-block mb-3">
                    Ideas
                    {isActive("/ideas") && (
                      <span className="absolute bottom-0 left-0 right-0 h-2 border-b-2 border-white"></span>
                    )}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className={`block py-2 px-3 md:hover:text-black md:p-0 text-white  relative${
                    isActive("/careers") ? "text-blue-700 underline" : ""
                  }`}>
                  <span className="relative inline-block mb-3">
                    Carers
                    {isActive("/careers") && (
                      <span className="absolute bottom-0 left-0 right-0 h-2 border-b-2 border-white"></span>
                    )}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`block py-2 px-3 md:hover:text-black md:p-0 text-white  relative${
                    isActive("/contact") ? "text-blue-700 underline" : ""
                  }`}>
                  <span className="relative inline-block mb-3">
                    Contact
                    {isActive("/contact") && (
                      <span className="absolute bottom-0 left-0 right-0 h-2 border-b-2 border-white"></span>
                    )}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
