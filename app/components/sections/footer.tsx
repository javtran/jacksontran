import GitHub from "../../../public/icons/github.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Instagram from "../../../public/icons/instagram.svg";
import Email from "../../../public/icons/email.svg";

const Footer = () => {
  const iconClass = `block fill-slate-200 hover:fill-sky-400 focus-visible:fill-sky-400 transform`;
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 flex flex-col items-end">
      <span>© {year} Jackson Tran</span>
      <ul className="flex gap-2 items-center mt-4">
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
    </footer>
  );
};

export default Footer;
