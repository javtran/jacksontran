"use client";
import Link from "next/link";
import Logo from "../../public/icons/logo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const tabClasses =
    "max-sm:text-sm text-slate-200 hover:text-sky-400 focus-visible:text-sky-400";

  // framer variants settings
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <nav
      id="navbar"
      className="fixed nav w-full flex justify-between items-center z-10"
      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
    >
      <motion.a
        href="/"
        className="stroke-slate-200 stroke-[30px] ml-5 md:ml-10 hover:stroke-sky-400 transition-none"
        style={{ strokeLinecap: "round" }}
        whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.3 } }}
        whileTap={{
          scale: 0.8,
          rotate: 180,
          borderRadius: "100%",
        }}
      >
        <Logo className="stroke-inherit max-md:w-8" />
      </motion.a>
      <motion.ul
        variants={container}
        className="max-sm:grow flex justify-around sm:gap-8 p-5 md:px-10 md:py-8 rounded-b-lg"
      >
        <motion.li variants={item}>
          <a href="#about" className={tabClasses}>
            <span className="text-sky-400 max-sm:hidden">1.</span> About
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a href="#experience" className={tabClasses}>
            <span className="text-sky-400 max-sm:hidden">2.</span> Experience
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a href="#projects" className={tabClasses}>
            <span className="text-sky-400 max-sm:hidden">3.</span> Projects
          </a>
        </motion.li>
        {/* <li>
          <a className={tabClasses}>
            <span className="text-sky-400">4.</span> Contact
          </a>
        </li> */}
        <motion.li variants={item}>
          <Link
            href="/jackson_tran_resume.pdf"
            target="_blank"
            className="max-sm:text-sm p-2 rounded text-white border-white hover:border-sky-400 border hover:text-sky-400"
            locale={false}
          >
            Resume
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
