import { motion } from "framer-motion";
import Image from "next/image";
import GitHub from "../../../public/icons/github.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Instagram from "../../../public/icons/instagram.svg";
import Email from "../../../public/icons/email.svg";
import SectionHeader from "../sectionheader";

const About = () => {
  const iconClass = `block fill-slate-200 hover:fill-sky-400 focus-visible:fill-sky-400 transform`;

  // framer variants settings
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.2,
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
    <header
      id="about"
      className="pt-24 lg:pt-0 flex flex-col sm:justify-center lg:flex-row lg:justify-around sm:items-center sm:gap-8 sm:min-h-screen"
    >
      <motion.div
        variants={container}
        className="flex sm:gap-16 lg:flex-col lg:gap-0"
      >
        <motion.div variants={item}>
          <Image
            src="pfp-squared.jpg"
            alt="portrait of Jackson"
            className="rounded-full max-sm:w-0 max-sm:h-0 grayscale hover:grayscale-0 hover:outline-4 hover:outline-offset-8 hover:outline-sky-400 outline-none animation"
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div variants={item} className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-slate-200 mt-4 sm:text-5xl">
            <a href="/">Jackson Tran</a>
          </h1>
          <h2 className="text-lg font-medium text-slate-200 tracking-tight mt-4 sm:text-xl">
            Ex SWE Intern at ChargePoint
          </h2>
          <p className="max-w-xs mt-4 leading-normal text-slate-400">
            I build digital experiences for software users.
          </p>
          <ul className="flex gap-2 items-center mt-4 lg:hidden">
            <li>
              <a
                href="https://github.com/javtran"
                target="_blank"
                className={iconClass}
              >
                <GitHub className="fill-inherit" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jacksontran1/"
                target="_blank"
                className={iconClass}
              >
                <LinkedIn className="fill-inherit" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jxtrxn/"
                target="_blank"
                className={iconClass}
              >
                <Instagram className="fill-inherit" />
              </a>
            </li>
            <li>
              <a
                href="mailto:jackson.tran00@gmail.com"
                target="_blank"
                className={iconClass}
              >
                <Email className="fill-inherit" />
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        variants={item}
        transition={{ delay: 1.2 }}
        className="sm:pt-4 lg:w-1/2 lg:py-24 max-sm:mt-16"
      >
        <SectionHeader index={1} title="About"></SectionHeader>
        <p className="mb-4 text-slate-400">
          My journey into software engineering started with a high school prank
          and has since grown into a passion for building impactful solutions. I hold
          a bachelor's degree in computer science and have developed software for diverse
          organizations, including
          {" "}
          <a
            href="https://www.sfcivictech.org/"
            target="_blank"
            className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
          >
            open-source communities
          </a>
          , an{" "}
          <a
            href="https://www.chargepoint.com/"
            target="_blank"
            className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
          >
            electrical vehicle infrastructure company
          </a>
          , and my city's{" "}
          <a
            href="https://www.sfhsa.org/"
            target="_blank"
            className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
          >
            human service agency
          </a>.
        </p>
        <p className="mb-4 text-slate-400">
          I am currently pursuing my{" "}
          <span className="font-medium text-slate-200">
            M.S. in Computer Science at Georgia Institute of Technology
          </span>,
           where I'm expanding my knowledge in artificial intelligence and machine learning.
           I am actively seeking a{" "}
           <span className="font-medium text-slate-200">
            Software Engineering internship
          </span>.
        </p>
        <p className="mb-4 text-slate-400">
          When I need a break from the screen, you can find me on the dance floor—
          I am now a dancer represented by {" "}
          <a
            href="https://www.raeagency.com/dancers/jackson-tran/"
            target="_blank"
            className="font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400"
          >
            Rae Agency
          </a>.
        </p>
      </motion.div>
    </header>
  );
};

export default About;
