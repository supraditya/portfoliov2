import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import ctaArrow from "../public/cta.svg";
import Footer from "../components/Footer";
import FeaturedProject from "../components/FeaturedProject";
import { BiLinkExternal } from "react-icons/bi";
import FigmaCommentDialog from "../components/FigmaCommentDialog";
import me from "../public/me.jpg";

export default function Home() {
  const prototypeBox = useRef();
  const [dimensions, setdimensions] = useState({
    width: 0,
    height: 0,
  });

  const [showAnimatedElement, setShowAnimatedElement] = useState(false);

  useEffect(() => {
    if (prototypeBox.current) {
      setdimensions({
        width: prototypeBox.current.offsetWidth,
        height: prototypeBox.current.offsetHeight,
      });
    }

    //Listener that fires when the page is scrolled to about 200px from the absolute bottom
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (isBottom) {
        setShowAnimatedElement(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          content="https://www.supraditya.com/meta-logo.png"
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
        <div className="px-8 md:px-32 flex flex-col flex-wrap max-md:justify-center pt-2 items-start relative">
          <div className="flex justify-between w-full max-md:flex-col">
            <div className="h-[55vh] md:h-[62vh] my-auto pt-16 flex flex-col justify-center lg:w-2/3">
              <Slide triggerOnce>
                <div className="hidden md:block h-[600px] w-[600px] w-100 -translate-x-[82.5%] -translate-y-[80.5%] md:-translate-x-[73%] md:-translate-y-[66%] border-r-2 border-b-2 border-figmaBlue border-dotted absolute"></div>
              </Slide>

              <p className="font-secondary text-2xl md:text-4xl ml-0.5 md:ml-1 mb-2 md:mb-4">
                I realise ideas from
              </p>
              <div className="mb-2 md:my-4">
                <span className="font-writing text-4xl md:text-6xl">
                  Pen and Paper
                </span>
                <span className="font-secondary text-2xl md:text-4xl">
                  &nbsp;to
                </span>
              </div>
              <Slide triggerOnce>
                <div className="p-1 md:p-2 w-fit relative">
                  <div className="border border-figmaBlue bg-white h-2 w-2 md:h-3 md:w-3 absolute -ml-1 -mt-1 z-20"></div>
                  <div className="border border-figmaBlue bg-white h-2 w-2 md:h-3 md:w-3 absolute md:mr-1 -mt-1 z-20 right-0"></div>
                  <p
                    ref={prototypeBox}
                    className="font-primary text-4xl md:text-6xl border-2 md:leading-snug border-figmaBlue z-10 bg-white pb-1"
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
              <div>
                <span className="font-secondary text-2xl leading-snug md:leading-tight md:text-4xl -mt-6">
                  and&nbsp;
                </span>
                <span className="font-coding text-3xl leading-snug md:leading-tight md:text-6xl blink pb-2">
                  &lt;p&gt;Product&lt;/p&gt;
                </span>
              </div>
            </div>
            <div className="max-lg:hidden lg:flex flex-col items-end justify-center w-1/3 ">
              <FigmaCommentDialog>
                <Link
                  href="https://medium.com/@aditya300100"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg flex items-center hover:underline"
                >
                  My Medium Articles <BiLinkExternal className="mt-0.5 ml-1" />
                </Link>
                <Link
                  href="https://www.npmjs.com/~supraditya"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg flex items-center hover:underline"
                >
                  My Open-Source Contributions
                  <BiLinkExternal className="mt-0.5 ml-1" />
                </Link>
              </FigmaCommentDialog>
            </div>
          </div>
          <Image
            src={ctaArrow}
            alt="Call to action arrow"
            className="w-30 mx-auto mt-14 md:mt-8 slow-bounce mb-20 md:mb-28"
          ></Image>
          <p className="text-3xl md:text-7xl font-primary mb-5">
            Featured Projects
          </p>
          <div className="flex flex-col w-fit md:w-full mb-2">
            <FeaturedProject
              title="Auto UX Concept for General Motors"
              domains={["All", "Case Study", "Design"]}
              flow="left"
              link="auto-ux"
              image="auto-ux"
              description="A full-fledged UI for Mass-Market Automobiles with humble peripherals."
            />
            <FeaturedProject
              title="R.E.T.A On-The-Go!"
              domains={[
                "All",
                "Case Study",
                "UX Research",
                "User-Centered Agile Development",
              ]}
              flow="right"
              link="reta"
              image="reta"
              description="Streamlining the 'administrative' part of Healthcare for Individuals pushing the boundaries of Modern Medicine."
            />
            <FeaturedProject
              title="Forgetful Foodie"
              domains={["All", "Case Study", "Design"]}
              flow="left"
              link="forgetful-foodie"
              image="forgetful-foodie"
              description="A kitchen pantry tracking and recipe-curation solution for the household."
            />

            <p className="font-secondary text-center mx-auto text-lg">
              Want to see more?
            </p>
            <Link
              href="projects"
              alt="Link to projects Page"
              className="mx-auto pb-4"
            >
              <button
                aria-label="View Projects Page"
                className="font-primary text-base border border-black rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out"
              >
                Visit My Projects Page
              </button>
            </Link>
          </div>
          {showAnimatedElement ? (
            <div className="lg:hidden max-lg:flex flex-col items-center justify-center w-full mb-6">
              <FigmaCommentDialog>
                <Link
                  href="https://medium.com/@aditya300100"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base flex items-center hover:underline"
                >
                  My Medium Articles <BiLinkExternal className="mt-0.5 ml-1" />
                </Link>
                <Link
                  href="https://www.npmjs.com/~supraditya"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base flex items-center hover:underline"
                >
                  My Open-Source Contributions
                  <BiLinkExternal className="mt-0.5 ml-1" />
                </Link>
              </FigmaCommentDialog>
            </div>
          ) : (
            <div className="bg-[#2C2C2C] lg:hidden p-1 mx-auto mb-6 border text-white rounded-t-3xl rounded-bl-sm rounded-br-3xl shadow-xl">
              <Image
                src={me}
                className="rounded-full h-10 w-10"
                alt="AM"
              ></Image>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
