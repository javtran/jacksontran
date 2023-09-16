"use client";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import React, { useEffect, useCallback, useState } from "react";

const Navbar = () => {
  // const [y, setY] = useState(window.scrollY);
  // const [visible, setVisible] = useState(true);
  // // https://codesandbox.io/s/detect-scroll-direction-with-memoization-lhwnd?file=/src/App.js
  // const handleNavigation = useCallback(
  //   (e: any) => {
  //     const window = e.currentTarget;
  //     if (y > window.scrollY) {
  //       console.log("scrolling up");
  //       if (!visible) {
  //         const navbar = document.getElementById("navbar");
  //         if (navbar) {
  //           navbar.style.height = "0";
  //         }
  //       }
  //       setVisible(true);
  //     } else if (y < window.scrollY) {
  //       console.log("scrolling down");
  //       if (visible) {
  //         const navbar = document.getElementById("navbar");
  //         if (navbar) {
  //           navbar.style.height = "80px";
  //         }
  //       }
  //       setVisible(false);
  //     }
  //     setY(window.scrollY);
  //   },
  //   [y]
  // );

  // useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  const tabClasses =
    "max-sm:text-sm text-slate-200 hover:text-sky-400 focus-visible:text-sky-400 hover:outline focus-visible:outline hover:outline-offset-8 focus-visible:outline-offset-8 hover:outline-dashed focus-visible:outline-dashed";
  return (
    <nav
      id="navbar"
      className="fixed nav w-full flex justify-between items-center z-10 animate"
      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
    >
      <a
        href="/jacksontran"
        className="stroke-slate-200 stroke-[30px] ml-5 md:ml-10 hover:stroke-sky-400 hover:motion-safe:animate-spin"
        style={{ strokeLinecap: "round" }}
      >
        <Logo className="stroke-inherit max-md:w-8" />
      </a>
      <ul className="max-sm:grow flex justify-around sm:gap-8 p-5 md:px-10 md:py-8 rounded-b-lg">
        <li>
          <a href="#about" className={tabClasses}>
            <span className="text-sky-400 max-sm:hidden">1.</span> About
          </a>
        </li>
        <li>
          <a href="#experience" className={tabClasses}>
            <span className="text-sky-400 max-sm:hidden">2.</span> Experience
          </a>
        </li>
        <li>
          <a href="#projects" className={tabClasses}>
            <span className="text-sky-400 max-sm:hidden">3.</span> Projects
          </a>
        </li>
        {/* <li>
          <a className={tabClasses}>
            <span className="text-sky-400">4.</span> Contact
          </a>
        </li> */}
        <li>
          <Link
            href="/jackson_tran_resume.pdf"
            className="max-sm:text-sm p-2 rounded text-white border-white hover:border-sky-400 border hover:text-sky-400"
            locale={false}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
