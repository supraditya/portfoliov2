import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
// import fontncolor from "../../public/assets/cryptogods-anubis/font-and-colors.png";
import projectImg from "../../public/assets/auto-ux/auto-ux.png";
import Highlights from "../../components/ProjectPage/Highlights";
import ActionButton from "../../components/ActionButton";
import { BsGlobe2 } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import problem from "../../public/assets/auto-ux/problem.png";
import dogmode from "../../public/assets/auto-ux/dog-mode.png";

import Head from "next/head";
export default function AutoUX() {
  return (
    <>
      <Head>
        <title>Making Mass-Market EVs More Approachable | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="Automotive UI Concept for General Motors"
          subtitle="Making mass-market Electric Vehicles (EVs) more approachable through intuitive animations, considerate interactions and a reimagined 'Dog Mode'"
        />
        <ActionButton
          link="https://www.figma.com/proto/MoK7Ok835HMGgh4oLpoNij/Assignment-5?node-id=850-28691&t=UVcBJU92274ILtxu-1&scaling=min-zoom&page-id=456%3A12040&starting-point-node-id=850%3A28691&show-proto-sidebar=1https://www.figma.com/proto/MoK7Ok835HMGgh4oLpoNij/Assignment-5?node-id=850-28691&t=aMcCr6j5mzCRwQmp-0&scaling=scale-down&page-id=456%3A12040&starting-point-node-id=850%3A28691&show-proto-sidebar=1"
          icon={<FaFigma />}
          label="Prototype"
        />
        <ActionButton
          link="https://1drv.ms/p/s!As2iKv3c-O0Y4X_r0Uyco4NHN1eg?e=JVzTBr"
          icon={<BsGlobe2 />}
          label="Presentation"
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="auto ux header"
            className="w-11/12 mt-5"
          ></Image>
          {/* <Image
            src={fontncolor}
            alt="font and colors used"
            className="w-4/5 md:w-1/3 object-contain mt-5"
          ></Image> */}
        </div>
        <Highlights
          summary="General Motors approached our cohort with a problem statement for each of their 3 vehicle segments: Mass-Market, Performance and Luxury. We picked the first one, met the stated requirements and then added a few ideas of our own, including intuitive gestures, visualizations to better convey EV-specific concepts, reimagined space-efficient climate controls and a twist on the traditional Dog/Pet Mode. We used advanced Figma prototyping techniques including component variants, variables and conditional flows."
          roles={["Interaction Designer", "Graphic Designer", "UX Designer"]}
          team={["Vivek Selvaraj"]}
          timeline="Feb 2024 - Apr 2022"
          tools={["Figma"]}
        />
        <h3 className="font-primary text-3xl mb-1 font-medium">The Problem</h3>
        <p className="font-secondary text-lg font-light text-justify">
          GM's main ask was:
        </p>
        <p className="font-secondary text-xl text-yellow-600 font-base px-10 md:px-20 py-4 text-center italic">
          “After a vehicle is purchased, how can we add value to the user with a
          new feature?”
        </p>
        <div className="w-11/12 mx-auto my-4 rounded-md text-center">
          <Image
            src={problem}
            alt="problem statement slide"
            className="mx-auto"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Problem Statement for Mass-Market Vehicle Segment. Courtesy: General
          Motors
        </p>
        <p className="font-secondary text-lg font-light text-justify">
          So we brainstormed several ideas, researched the competition,
          solutions devised by tech giants such as Apple and Google, and GM
          themselves, and came up with the ideas depicted below.
        </p>
        <h3 className="font-primary text-3xl mb-1 font-medium">
          But first, what <i>is</i> 'Dog Mode'?
        </h3>
        <p className="font-secondary text-lg font-light text-justify">
          Initially introduced by Tesla inspired by an X (Twitter) user's
          suggestion that they have a way to briefly leave their pets safely and
          comfortably in a car, Dog Mode essentially does the following:
        </p>
        <div className="w-11/12 mx-auto my-4 rounded-md text-center">
          <Image src={dogmode} alt="dog mode slide" className="mx-auto"></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          What is Dog Mode? Courtesy: General
          Motors
        </p>

        {/* <iframe
          width="100%"
          height="600"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMoK7Ok835HMGgh4oLpoNij%2FAssignment-5%3Ftype%3Ddesign%26node-id%3D850-28691%26t%3DRbdWvlCFz3Zv6WvD-1%26scaling%3Dscale-down%26page-id%3D456%253A12040%26starting-point-node-id%3D850%253A28691%26mode%3Ddesign"
          allowFullScreen
        ></iframe> */}
      </Wrapper>
    </>
  );
}
