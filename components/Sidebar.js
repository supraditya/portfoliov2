import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";

export default function Sidebar(props) {
  return (
    <div
      className={`bg-white shadow-lg transition-all ease-in-out duration-200 pb-5 flex items-center ${
        props.sidebarState ? "-translate-x-52" : "translate-x-full"
      } top-0 fixed w-screen h-full`}
    >
      <div className="w-72 pr-4 h-1/2 flex flex-none flex-col justify-start">
        <ul className="flex flex-none items-end text-lg pl-4 flex-col">
          <button onClick={() => props.updateSidebarState(false)}className="mb-6" aria-label="Close sidebar">
            <IoCloseSharp
              className="text-black transition-all ease-in-out duration-100"
              size="40px"
            />
          </button>
          <li className="my-2.5 pr-1.5">
            <Link
              onClick={() => props.updateSidebarState(false)}
              className={`${
                props.activeLink["/"] ? "font-semibold" : ""
              } text-2xl hover:border-b-2 border-black font-primary`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="my-2.5 pr-1.5">
            <Link
              onClick={() => props.updateSidebarState(false)}
              className={`${
                props.activeLink["/projects"] ? "font-semibold" : ""
              } text-2xl hover:border-b-2 border-black font-primary`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="my-2.5 pr-1.5">
            <Link
              onClick={() => props.updateSidebarState(false)}
              className={`${
                props.activeLink["/about"] ? "font-semibold" : ""
              } text-2xl hover:border-b-2 border-black font-primary`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="my-2.5 pr-1.5">
            <Link
              onClick={() => props.updateSidebarState(false)}
              className="text-2xl hover:border-b-2 border-black font-primary flex items-center"
              href="https://drive.google.com/file/d/1C8n0HuKJgZNvm8MiCxan9uwsDCfwJDog/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume<BiLinkExternal className="mt-0.5 ml-1" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
