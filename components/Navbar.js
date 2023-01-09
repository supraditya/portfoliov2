import Image from "next/image";
import navLogo from "../public/nav-logo.svg";
import {BiLinkExternal} from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="z-50 bg-white border border-black py-4 px-16 flex justify-between">
      <Image src={navLogo} alt="Aditya Menon's personal logo" className="w-16"></Image>
      <ul className="list-none flex items-center">
        <li className="mx-4 text-lg">Home</li>
        <li className="mx-4 text-lg">Projects</li>
        <li className="mx-4 text-lg">About</li>
        <li className="mx-4 text-lg flex items-center">Resume <BiLinkExternal className="mt-0.5 ml-1"/></li>
      </ul>
    </nav>
  );
}
