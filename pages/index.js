import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import Navbar from "../components/Navbar";
import Image from "next/image";
import verticalLine from "../public/line.svg";
import ctaArrow from "../public/cta.svg";
import Footer from "../components/Footer";
import FeaturedProject from "../components/FeaturedProject";

export default function Home() {
  const prototypeBox = useRef();
  const [dimensions, setdimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (prototypeBox.current) {
      setdimensions({
        width: prototypeBox.current.offsetWidth,
        height: prototypeBox.current.offsetHeight,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Aditya Menon</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer who designs and develops ideas to life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://www.supraditya.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.supraditya.com/logo.svg"
        />
        <meta
          name="description"
          content="My name is Aditya Menon, and I'm a UX Grad Student and a self-taught Web Developer."
        ></meta>
        <meta
          name="keywords"
          content="Aditya, Menon, Aditya Menon, supraditya, Supraditya, Web Developer, Frontend Web Developer, IEEECS, IEEE-CS, IEEE Computer Society VIT, VIT, IEEE CS VIT, Frontend Web Development, UX, User Experience, Design, UX Design, User Experience Design, Case Study, Graphic Design, Interaction Design"
        ></meta>
        <meta property="og:title" content="Aditya Menon" />
        <meta
          property="og:description"
          content="My name is Aditya Menon, and I'm a UX Grad Student and a self-taught Web Developer."
        />
      </Head>
      <Navbar />

      <main className="relative">
        <div className="px-8 md:px-32 flex flex-col max-md:justify-center pt-2 items-start relative">
          <div className="max-md:min-h-[65vh] max-md:flex max-md:flex-col max-md:justify-center">
            <Slide triggerOnce>
              <Image
                src={verticalLine}
                alt="dotted line vertical"
                className="hidden md:block absolute left-[11rem] h-[30vh] top-[-3rem] scale-150"
              ></Image>
              <Image
                src={verticalLine}
                alt="dotted line horizontal"
                className="hidden md:block absolute rotate-90 top-[0.2rem]"
              ></Image>
            </Slide>

            <p className="font-secondary text-2xl md:text-4xl leading-normal md:leading-snug ml-0.5 md:ml-1">
              I realise ideas
            </p>
            <p className="font-secondary text-4xl leading-normal md:leading-snug md:text-6xl">
              From
            </p>
            <div className="leading-normal md:leading-snug">
              <span className="font-writing text-4xl md:text-6xl">
                Pen and Paper
              </span>
              <span className="font-secondary text-4xl md:text-6xl">
                &nbsp;to
              </span>
            </div>
            <Slide triggerOnce>
              <div className="p-1 md:p-2 w-fit relative">
                <div className="border border-figmaBlue bg-white h-2 w-2 md:h-3 md:w-3 absolute -ml-1 -mt-1 z-20"></div>
                <div className="border border-figmaBlue bg-white h-2 w-2 md:h-3 md:w-3 absolute md:mr-1 -mt-1 z-20 right-0"></div>
                <p
                  ref={prototypeBox}
                  className="font-primary text-4xl leading-normal md:leading-snug md:text-6xl border-2 border-figmaBlue z-10 bg-white"
                >
                  Prototype
                </p>
                <div className="border border-figmaBlue bg-white h-2 w-2 md:h-3 md:w-3 absolute md:mr-1 -mt-1 z-20 right-0"></div>
                <div className="border border-figmaBlue bg-white h-2 w-2 md:h-3 md:w-3 absolute -ml-1 -mt-1 z-20"></div>
                <div className="bg-figmaBlue rounded-md py-0.5 px-2 text-white w-fit z-20 top-full text-[0.5rem] md:text-sm mt-1.5 mx-auto">
                  {dimensions.width} x {dimensions.height}
                </div>
              </div>
            </Slide>
            <p className="font-secondary text-4xl leading-snug md:leading-tight md:text-6xl -mt-6">
              and
            </p>
            <p className="font-coding text-4xl leading-snug md:leading-tight md:text-6xl pb-1 md:pb-3 blink">
              &lt;p&gt;Product&lt;/p&gt;
            </p>
          </div>
          <Image
            src={ctaArrow}
            className="w-30 mx-auto mt-14 md:mt-8 slow-bounce mb-20 md:mb-28"
          ></Image>
          <p className="text-4xl md:text-7xl font-primary mb-5">My Projects</p>
          <div className="flex flex-col w-fit md:w-full mb-14">
            <FeaturedProject
              title="Forgetful Foodie"
              domains={["All", "Case Study", "Design"]}
              flow="left"
              link="forgetful-foodie"
              image="forgetful-foodie"
              description="A kitchen pantry tracking and recipe-curation solution for the household."
            />
            <FeaturedProject
              title="Dr. Menon's Palliative Care"
              domains={["All", "Case Study", "Graphic Design"]}
              flow="right"
              link="palliative-care"
              image="palliative-care"
              description="An old age home with a focus on rehabilitation and holistic healing, rather than mere extension of life."
            />
            <FeaturedProject
              title="The Portfolio Journey"
              domains={["All", "Case Study", "Design", "Development"]}
              flow="left"
              link="portfolio-website"
              image="portfolio-website"
              description="The 2-year journey encompassing the vision, lessons learned, and execution over two iterations of my portfolio website."
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
