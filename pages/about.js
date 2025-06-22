import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import me from "../public/me.jpg";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

import { RESUME_LINK } from "../ResumeLink";
import { BiLinkExternal } from "react-icons/bi";

import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaSoundcloud,
  FaMediumM,
} from "react-icons/fa";
import { SiNpm } from "react-icons/si";

import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Aditya Menon</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <div className="px-10 md:px-32 max-lg:mb-4 min-h-[80vh] flex justify-between items-start flex-wrap max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center">
        <div className="lg:w-2/5 flex flex-col justify-between">
          <p className="text-center mt-4 md:mt-0 md:text-left text-4xl md:text-7xl font-primary mb-4">
            About Me
          </p>
          <div className="flex justify-between mb-4">
            <a
              href="https://linkedin.com/in/supraditya"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-3xl">
                <FaLinkedin />
              </span>
            </a>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=adityame@umich.edu&tf=1">
              <span className="text-3xl">
                <MdEmail />
              </span>
            </a>
            <a
              href="https://github.com/supraditya"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-3xl">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://npmjs.com/~supraditya"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-3xl">
                <SiNpm />
              </span>
            </a>
            <a
              href="https://medium.com/@aditya300100"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-3xl">
                <FaMediumM />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UC4J1TSccU4G_CriLC9eoAQw"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-3xl">
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://soundcloud.com/p-r-y-m-e-v-i-l"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-3xl">
                <FaSoundcloud />
              </span>
            </a>
          </div>
          <p className="text-base font-secondary text-justify mb-1.5">
            Heyyo! My name's Aditya Menon, and I'm currently a <strong>UI Developer at
            LTIMindtree</strong>.
            I also have a Master's from the University of Michigan
            in Information Science, where I focused on {" "}
            <strong>
              User Experience (UX) Research and User-Centered Agile Development
            </strong>
            .
          </p>
          <p className="text-base font-secondary text-justify mb-1.5">
            I <strong> majored in Computer Science </strong> back in
            undergrad in India, and I've been a developer for
            over 6 years now.
          </p>
          <p className="text-base font-secondary text-justify mb-1.5">
            I'm a problem solver at heart, and I love picking up new skills, 
            be it domain-specific or something new entirely, as I work towards
            finding solutions. Owing to my background (and some wonderful
            teachers and friends along the way), I find my strongest ability to
            be able to {" "}
            <strong>
              execute my vision and turn it into something tangible {" "}
            </strong>
            (like this website, which I designed and developed from scratch over
            the past year!)
          </p>
          <p className="text-base font-secondary text-justify">
            Outside of work and school, I like to occasionally produce music,
            make sketch comedy, cook or just mindlessly binge YouTube ¯\_(ツ)_/¯
          </p>
        </div>
        <Slide triggerOnce direction="right">
          <div className="relative w-2/5 mt-1 min-w-[250px] max-lg:mx-auto md:min-w-[300px] lg:w-[400px] xl:w-[500px]">
            <div className="hidden z-10 lg:block h-[500px] w-[400px] w-100 lg:translate-x-[50%] lg:-translate-y-[60.5%] xl:translate-x-[62.5%] xl:-translate-y-[48%] border-l-2 border-b-2 border-figmaBlue border-dotted absolute"></div>

            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -ml-1 -mt-1 z-30"></div>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -mr-1 -mt-1 z-30 right-0"></div>
            <Image
              src={me}
              alt="My profile photo"
              className="relative border-2 border-figmaBlue z-20 bg-white mx-auto"
            ></Image>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -mr-1 -mt-1 z-30 right-0"></div>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -ml-1 -mt-1 z-30"></div>
            <div className="bg-figmaBlue rounded-md py-0.5 px-2 mt-2 text-white z-20 w-fit text-sm mx-auto">
              That's me!
            </div>
          </div>
        </Slide>
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-secondary text-center mx-auto text-lg">
          Want to see my qualifications?
        </p>
        <Link
          href={RESUME_LINK}
          target="_blank"
          rel="noreferrer"
          alt="Link to resume"
          className="mx-auto pb-4"
        >
          <button
            aria-label="View resume"
            className="font-primary flex items-center text-base border border-black rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out"
          >
            View my Resume <BiLinkExternal className=" ml-1" />
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
