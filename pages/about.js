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
          className="absolute right-[23rem] h-2/5 top-0 max-xl:hidden"
        ></Image>
        <Image
          src={verticalLine}
          alt="dotted line horizontal"
          className="absolute rotate-90 top-36 right-0 max-xl:hidden"
        ></Image>
        <div className="px-32 mb-14 flex justify-between items-start flex-wrap max-xl:flex-col-reverse max-xl:justify-center max-xl:items-center">
          <div className="w-2/5 flex flex-col justify-between">
            <p className="text-7xl font-primary mb-4">About Me</p>
            <div className="flex justify-between mb-4">
              <a href="https://linkedin.com/in/supraditya" target="_blank" rel="noreferrer">
                <span className="text-3xl">
                  <FaLinkedin />
                </span>
              </a>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=adityame@umich.edu&tf=1">
                <span className="text-3xl">
                  <MdEmail />
                </span>
              </a>
              <a href="https://github.com/supraditya" target="_blank" rel="noreferrer">
                <span className="text-3xl">
                  <FaGithub />
                </span>
              </a>
              <a href="https://instagram.com/menon_chala_gaya" target="_blank" rel="noreferrer">
                <span className="text-3xl">
                <FaInstagram />
                </span>
              </a>
              <a href="https://www.youtube.com/channel/UC4J1TSccU4G_CriLC9eoAQw" target="_blank" rel="noreferrer">
                <span className="text-3xl">
                <FaYoutube />
                </span>
              </a>
              <a href="https://soundcloud.com/p-r-y-m-e-v-i-l" target="_blank" rel="noreferrer">
                <span className="text-3xl">
                <FaSoundcloud />
                </span>
              </a>
            </div>
            <p className="text-lg font-secondary text-justify">
            I, Aditya Menon, am a First Year Graduate student studying <strong>UI/UX Design</strong> and <strong>User-Centered Agile Development</strong> at the University of Michigan.
            <br></br><br></br>I have been working as a self-taught Frontend Web Developer and Designer for over <strong>3 years</strong> and have completed several internships, along with some projects for my former Student Organisation: IEEE-CS VIT.
            <br></br><br></br>Apart from Web Development, I occasionally produce music, sketch comedy and standups since you either gotta be funny or good-looking (I'm neither)
            </p>
          </div>
          <div className="relative w-2/5 mt-1 min-w-[300px] xl:w-[500px]">
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
      <Footer/>
    </>
  );
}
