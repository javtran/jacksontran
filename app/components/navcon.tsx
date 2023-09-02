import Image from "next/image";
import GitHub from "../../public/github.svg";
import LinkedIn from "../../public/linkedin.svg";
import Instagram from "../../public/instagram.svg";

const Navcon = () => {
  const iconClass = `block fill-slate-200 hover:fill-sky-400 focus-visible:fill-sky-400 transition duration-300 ease-in-out transform 
  hover:-translate-y-0.5 focus-visible:-translate-y-0.5 hover:scale-105 focus-visible:scale-105`;

  return (
    <div className="fixed bottom-0 left-10 max-lg:hidden">
      <ul className="flex flex-col gap-2 items-center after:content-[' '] after:w-px after:h-20 after:bg-slate-200">
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
      </ul>
    </div>
  );
};

export default Navcon;
