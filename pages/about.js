import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import me from "../public/me.jpg";
import verticalLine from "../public/line.svg";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";
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
      <div className="overflow-x-hidden">
        <Image
          src={verticalLine}
          alt="dotted line vertical"
          className="hidden lg:block absolute right-[23rem] h-2/5 top-0 max-xl:hidden"
        ></Image>
        <Image
          src={verticalLine}
          alt="dotted line horizontal"
          className="hidden lg:block absolute rotate-90 top-36 right-0 max-xl:hidden"
        ></Image>
        <div className="px-10 md:px-32 mb-2 md:mb-14 min-h-[80vh] flex justify-between items-start flex-wrap max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center">
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
                href="https://instagram.com/menon_chala_gaya"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-3xl">
                  <FaInstagram />
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
              Heyyo! My name's Aditya Menon, and I'm currently a{" "}
              <strong> second-year grad student </strong> at the University of
              Michigan, studying UX and User-Centered Agile Development.
            </p>
            <p className="text-base font-secondary text-justify mb-1.5">
              I <strong> majored in Computer Science </strong> back in my
              undergrad in India, and I've been self-learning web development
              for over 5 years now!
            </p>
            <p className="text-base font-secondary text-justify mb-1.5">
              I'm a problem solver at heart, and I love picking up new skills,
              be it technical, managerial, communicative etc. as I work towards
              finding solutions! Owing to my background (and some wonderful
              teachers and friends along the way), I find my strongest ability
              to be able to{" "}
              <strong>
                execute my vision and turn it into something tangible{" "}
              </strong>{" "}
              (like this website, which I designed and developed from scratch
              over the past year!)
            </p>
            <p className="text-base font-secondary text-justify">
              Outside of work and school, I like to occasionally produce music,
              make sketch comedy, cook or just mindlessly binge YouTube ¯\_(ツ)_/¯
            </p>
          </div>
          <div className="relative w-2/5 mt-1 min-w-[250px] md:min-w-[300px] xl:w-[500px]">
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -ml-1 -mt-1 z-20"></div>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -mr-1 -mt-1 z-20 right-0"></div>
            <Image
              src={me}
              alt="My profile photo"
              className="border-2 border-figmaBlue z-10 bg-white mx-auto"
            ></Image>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -mr-1 -mt-1 z-20 right-0"></div>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -ml-1 -mt-1 z-20"></div>
            <div className="bg-figmaBlue rounded-md py-0.5 px-2 mt-2 text-white z-20 w-fit text-sm mx-auto">
              That's me!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
