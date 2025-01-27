import Image from "next/image";
import footerLogo from "../public/footerLogo.svg";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  // FaYoutube,
  // FaSoundcloud,
  FaMediumM,
} from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { RESUME_LINK } from "../ResumeLink";

export default function Footer() {
  return (
    <footer className="bg-footerBlack h-52 text-white m-0 font-primary flex justify-between lg:px-32">
      <Image
        src={footerLogo}
        className="hidden lg:block w-1/3 xl:pr-24"
        alt="Footer logo"
      ></Image>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/3">
        <Link
          href={RESUME_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Aditya Menon's resume"
          className="mx-4 text-lg flex items-center hover:border-b-2 border-white"
        >
          Resume <BiLinkExternal className="mt-0.5 ml-1" />
        </Link>
        <div className="flex justify-between mt-4 w-3/4">
          <a
            href="https://linkedin.com/in/supraditya"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Aditya Menon's linkedin"
          >
            <span className="text-3xl text-white">
              <FaLinkedin />
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=adityame@umich.edu&tf=1"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Aditya Menon's gmail"
          >
            <span className="text-3xl text-white">
              <MdEmail />
            </span>
          </a>
          <a
            href="https://github.com/supraditya"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Aditya Menon's github"
          >
            <span className="text-3xl text-white">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://npmjs.com/~supraditya"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Aditya Menon's npm profile"
          >
            <span className="text-3xl text-white">
              <SiNpm />
            </span>
          </a>
          <a
            href="https://medium.com/@aditya300100"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Aditya Menon's Medium Blog"
          >
            <span className="text-3xl text-white">
              <FaMediumM />
            </span>
          </a>
          {/* <a
            href="https://www.youtube.com/channel/UC4J1TSccU4G_CriLC9eoAQw"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Aditya Menon's youtube"
          >
            <span className="text-3xl text-white">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://soundcloud.com/p-r-y-m-e-v-i-l"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Aditya Menon's soundcloud"
          >
            <span className="text-3xl text-white">
              <FaSoundcloud />
            </span>
          </a> */}
        </div>
      </div>
      <div className="w-1/3 hidden lg:flex items-center justify-end">
        <ul className="list-none flex items-center">
          <Link
            href="/"
            className={`mx-4 text-lg hover:border-b-2 border-white`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`mx-4 text-lg hover:border-b-2 border-white`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`mx-4 text-lg hover:border-b-2 border-white`}
          >
            About
          </Link>
        </ul>
      </div>
    </footer>
  );
}
