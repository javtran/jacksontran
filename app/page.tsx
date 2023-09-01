import Image from "next/image";
import About from "./about";
import Navbar from "./navbar";
import Navcon from "./navcon";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navcon />
      <div className="fixed bottom-0 right-10 max-lg:hidden flex flex-col gap-2 items-center after:content-[' '] after:w-px after:h-20 after:bg-slate-200">
        <a
          href="mailto:jackson.tran00@gmail.com"
          className="text-slate-200 tracking-widest vertical-text fill-slate-200 hover:text-sky-400 focus-visible:text-sky-400 transition duration-300 ease-in-out transform 
          hover:-translate-y-2 focus-visible:-translate-y-2"
        >
          jackson.tran00@gmail.com
        </a>
      </div>
      <div
        className="mx-auto min-h-screen max-w-screen-xl selection:bg-sky-400 selection:text-sky-900 px-8 max-sm:pt-20 sm:px-10 md:px-28
      "
      >
        <About />
        <div id="experience" className="block w-100 p-40 bg-slate-200">
          asdfasdfasdfasdf
        </div>
      </div>
    </div>
  );
}
