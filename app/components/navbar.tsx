import Logo from "../../public/logo.svg";

const Navbar = () => {
  const tabClasses =
    "text-slate-200 hover:text-sky-400 focus-visible:text-sky-400 transition-all duration-300 ease-in-out hover:outline focus-visible:outline hover:outline-offset-8 focus-visible:outline-offset-8 hover:outline-dashed focus-visible:outline-dashed";
  return (
    <nav className="fixed nav w-full flex justify-between items-center z-10" style={{backdropFilter: 'blur(8px);'}}>
      <a href="/" className="stroke-slate-200 stroke-[30px] ml-4" style={{strokeLinecap: 'round'}}>
        <Logo className="stroke-inherit" />
      </a>
      <ul className="flex gap-8 px-10 py-8 rounded-b-lg">
        {/* <div className="logo">JT</div> */}
        <li>
          <a href="#about" className={tabClasses}>
            <span className="text-sky-400">1.</span> About
          </a>
        </li>
        <li>
          <a href="#experience" className={tabClasses}>
            <span className="text-sky-400">2.</span> Experience
          </a>
        </li>
        <li>
          <a href="#projects" className={tabClasses}>
            <span className="text-sky-400">3.</span> Projects
          </a>
        </li>
        <li>
          <a className={tabClasses}>
            <span className="text-sky-400">4.</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
