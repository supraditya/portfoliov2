import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import navLogo from "../public/nav-logo.svg";
import { BiLinkExternal } from "react-icons/bi";
import {AiOutlinePause} from 'react-icons/ai'

export default function Navbar() {
  const [activeLink, setactiveLink] = useState({
    "/": true,
    "/projects": false,
    "/about": false,
  });

  // State to toggle sidebar open/close
  const [sidebarState, setsidebarState] = useState(false);

  // State to keep track of whether webpage is being scrolled through or at top level
  const [scrollState, setscrollState] = useState(false);

  // Object containing styling for nav when webpage is scrolled
  const navScrollStyles = {
    transition: "all 0.1s ease-in-out",
    backgroundColor: "#fff",
  };
  const router = useRouter();
  useEffect(() => {
    let activeLinkTemp = { ...activeLink };
    Object.keys(activeLinkTemp).forEach((key) => {
      if (key === router.pathname) activeLinkTemp[key] = true;
      else activeLinkTemp[key] = false;
    });
    setactiveLink(activeLinkTemp);
    document.addEventListener("scroll", () => {
      // Returns true if the window is scrolled, else returns false
      const scrollStateTemp = window.scrollY >= 50;
      setscrollState(scrollStateTemp);
    });
  }, []);

  return (
    <nav
      style={scrollState ? navScrollStyles : {}}
      className="sticky w-full mx-auto transition-all duration-100 ease-in-out top-0 z-50 py-6 px-8 md:px-32 flex justify-between font-primary"
    >
      <Link href="/">
        <Image
          src={navLogo}
          alt="Aditya Menon's personal logo"
          className={`${
            scrollState ? "w-10" : "w-12"
          } min-w-[3rem] transition-all duration-200`}
        ></Image>
      </Link>
      {/* Mobile sidebar */}
      <div className="md:hidden flex items-center">
        <button
        aria-label="Open sidebar"
          onClick={() => {
            setsidebarState(true);
          }}
        >
          <AiOutlinePause size="50px" className="rotate-90"/>
        </button>
        <Sidebar
          sidebarState={sidebarState}
          updateSidebarState={setsidebarState}
          activeLink={activeLink}
        />
      </div>
      {/* Desktop navbar */}
      <ul className="hidden md:flex list-none items-center">
        <Link
          href="/"
          className={`mx-4 text-lg hover:border-b-2 border-black ${
            activeLink["/"] ? "font-semibold" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`mx-4 text-lg hover:border-b-2 border-black ${
            activeLink["/projects"] ? "font-semibold" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`mx-4 text-lg hover:border-b-2 border-black ${
            activeLink["/about"] ? "font-semibold" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="https://drive.google.com/file/d/1C8n0HuKJgZNvm8MiCxan9uwsDCfwJDog/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="mx-4 text-lg flex items-center hover:border-b-2 border-black"
        >
          Resume <BiLinkExternal className="mt-0.5 ml-1" />
        </Link>
      </ul>
    </nav>
  );
}
