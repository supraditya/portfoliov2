import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import projectImg from "../../public/assets/reta/reta.png";
import ReactPlayer from "react-player/youtube";
import Highlights from "../../components/ProjectPage/Highlights";
import ActionButton from "../../components/ActionButton";
import { useState, useEffect } from "react";
import fontncolor from "../../public/assets/reta/font-and-colors.png";
import beforeAfter1 from "../../public/assets/reta/before-after-1.png"
import beforeAfter2 from "../../public/assets/reta/before-after-2.png"
import beforeAfter3 from "../../public/assets/reta/before-after-3.png"
import beforeAfter4 from "../../public/assets/reta/before-after-4.png"
import { FaYoutube, FaGlobe } from "react-icons/fa";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Head from "next/head";
export default function Reta() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>R.E.T.A On-the-Go! | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:url" content="https://www.supraditya.com/projects/reta" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.supraditya.com/assets/reta/reta.png"
        />
      </Head>
      <Wrapper>
        <Header
          title="R.E.T.A On-the-Go!"
          subtitle="Streamlining the 'administrative' part of Healthcare for Individuals pushing the boundaries of Modern Medicine."
        />
        <ActionButton
          link="https://youtu.be/I99bimhBpoQ"
          label="Product Demo"
          icon={<FaYoutube/>}
        />
        <ActionButton
          link="https://quartz-vibraphone-0f2.notion.site/RETA-On-The-Go-The-future-of-effort-tracking-for-Michigan-Medicine-s-clinical-staff-147f2b0843a84ea58b3cccc1479f5d3b"
          label="Detailed Case Study"
          icon={<FaGlobe/>}
        />
        <div className="py-4 my-2 md:pr-10 md:my-4 rounded-md text-center bg-blue-200 flex flex-col items-center md:flex-row justify-between">
          <div className="w-4/5 md:w-1/2 mt-5">
            <Zoom>
              <Image src={projectImg} alt="RETA header"></Image>
            </Zoom>
          </div>
          <div className="w-4/5 md:w-2/5 h-min mt-5">
            <Zoom>
              <Image src={fontncolor} alt="font and colors used"></Image>
            </Zoom>
          </div>
        </div>
        <Highlights
          summary="Short for 'Research Effort Tracking Application', RETA On-the-Go was designed and developed from the ground up for Michigan Medicine's team of Clinical Researchers testing new treatments and trials, actively advancing the field of modern medicine. The original RETA was developed only for desktop and had not undergone a refresh for more than a decade, and the Research clinicians desired for a way to log their biweekly effort through their mobile devices. Thus, RETA On-the-Go was born. This project was part of my Mastery Course in User-Centered Agile Development at the University of Michigan, and required us to conduct both user research and subsequent development work over the span of four 2-week agile sprints."
          roles={[
            "Fullstack Developer",
            "UX Researcher",
            "Project Manager",
            "Scrum Master",
          ]}
          team={[
            "Angel Ranjel",
            "Rongxiang (Chris) Rao",
            "Siting Xing",
            "Yihao Shi",
          ]}
          timeline="Jan 2024 - Apr 2024"
          tools={[
            "React",
            "TailwindCSS",
            "Redux",
            "Denodo Solution Manager",
            "JIRA",
            "Oracle SQL Database",
          ]}
        />
        <h3 className="font-primary text-3xl mt-3 mb-2 font-medium">
          Before and After
        </h3>
        <div className="bg-[#F0F0F0] p-4 my-4 rounded-md text-center">
          <Zoom>
            <Image src={beforeAfter1} alt="RETA Before and After 1" className="mx-auto my-4"></Image>
          </Zoom>
          <Zoom>
            <Image src={beforeAfter2} alt="RETA Before and After 2" className="mx-auto my-4"></Image>
          </Zoom>
          <Zoom>
            <Image src={beforeAfter3} alt="RETA Before and After 3" className="mx-auto my-4"></Image>
          </Zoom>
          <Zoom>
            <Image src={beforeAfter4} alt="RETA Before and After 4" className="mx-auto my-4"></Image>
          </Zoom>
        </div>
        <h3 className="font-primary text-3xl mt-3 mb-2 font-medium">
          Final Demo
        </h3>
        {hasWindow && (
          <div className="py-2  my-4 rounded-md text-center flex justify-around">
            <ReactPlayer
              url="https://youtu.be/I99bimhBpoQ"
              playing={false}
              controls={true}
              className="mx-auto rounded-md"
            />
          </div>
        )}
      </Wrapper>
    </>
  );
}
