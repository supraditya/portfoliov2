import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import navLogo from "../public/nav-logo.svg";
import { BiLinkExternal } from "react-icons/bi";

export default function Navbar() {
  const [activeLink, setactiveLink] = useState({
    '/':true,
    '/projects':false,
    '/about':false,
  });
  const router = useRouter();
  useEffect(() => {
    let temp={...activeLink};
    Object.keys(temp).forEach((key)=>{
      if(key===router.pathname)
        temp[key]=true;
      else
        temp[key]=false;
    });
    setactiveLink(temp);
  }, []);

  return (
    <nav className="z-50 bg-white border border-black py-4 px-16 flex justify-between">
      <Link href="/">
        <Image
          src={navLogo}
          alt="Aditya Menon's personal logo"
          className="w-16"
        ></Image>
      </Link>
      <ul className="list-none flex items-center">
        <Link href="/" className={`mx-4 text-lg hover:border-b-2 border-black ${activeLink['/']?'font-semibold':''}`}>
          Home
        </Link>
        <Link
          href="/projects"
          className={`mx-4 text-lg hover:border-b-2 border-black ${activeLink['/projects']?'font-semibold':''}`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`mx-4 text-lg hover:border-b-2 border-black ${activeLink['/about']?'font-semibold':''}`}
        >
          About
        </Link>
        <Link
          href="https://drive.google.com/file/d/1IcQPRXmV32R_FycBMqSuYf4R7x6aU72Q/view"
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
