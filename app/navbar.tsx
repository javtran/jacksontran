let classes =
  "text-slate-200 hover:text-sky-400 focus-visible:text-sky-400 transition-all duration-300 ease-in-out hover:outline focus-visible:outline hover:outline-offset-8 focus-visible:outline-offset-8 hover:outline-dashed focus-visible:outline-dashed";
const Navbar = () => {
  return (
    <nav className="absolute nav w-full">
      <ul className="flex justify-around px-10 py-8 rounded-b-lg">
        {/* <div className="logo">JT</div> */}
        <li>
          <a href="#about" className={classes}>
            <span className="text-sky-400">1.</span> About
          </a>
        </li>
        <li>
          <a href="#experience" className={classes}>
            <span className="text-sky-400">2.</span> Experience
          </a>
        </li>
        <li>
          <a className={classes}>
            <span className="text-sky-400">3.</span> Projects
          </a>
        </li>
        <li>
          <a className={classes}>
            <span className="text-sky-400">4.</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
