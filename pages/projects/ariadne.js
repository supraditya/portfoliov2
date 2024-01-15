import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import projectImg from "../../public/assets/ariadne/ariadne.png";
import ReactPlayer from "react-player/youtube";
import Highlights from "../../components/ProjectPage/Highlights";
import ActionButton from "../../components/ActionButton";
import { BsGlobe2 } from "react-icons/bs";
import { useState, useEffect } from "react";

import Head from "next/head";
export default function Ariadne() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>ARiadne | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="ARiadne"
          subtitle="An Augmented Reality system to navigate even the most labyrinthine libraries."
        />
        <ActionButton
          link="https://ariadne-ar.notion.site/ariadne-ar/ARiadne-Library-Navigation-System-25beb64a323d4a29828f8cb4f8a5ad2f"
          icon={<BsGlobe2 />}
          label="Product Website"
        />
        <div className="py-2 my-2 md:my-4 rounded-md text-center flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="ariadne header"
            // className="w-4/5 md:w-2/5 mt-5"
          ></Image>
        </div>
        <Highlights
          summary="Named after the mythological Greek princess who showed Thesius a way out of the Labyrinth through a magical thread, ARiadne is a design concept proposed to help people find their way to their desired resources and study spaces across vast libraries. ARiadne is the result of extensive user interviews, participant diary studies and surveys, Wizard of Oz user enactments and collective brainstorming."
          roles={[
            "Interaction Designer",
            "UX Researcher",
            "Usability Engineer",
          ]}
          team={["Anita Alvarado", "Matthew Tomaszewski", "Michael Bogert"]}
          timeline="Aug 2023 - Dec 2023"
          tools={[
            "Figma",
            "Adobe Aero",
            "Miro"
          ]}
        />
        <h3 className="font-primary text-3xl mt-3 mb-2 font-medium">
          Final Demo
        </h3>
        <ActionButton
          link="https://ariadne-ar.notion.site/ariadne-ar/ARiadne-Library-Navigation-System-25beb64a323d4a29828f8cb4f8a5ad2f"
          // icon={<BsGlobe2 />}
          label="Link to Complete Case Study"
        />
        {hasWindow && (
          <div className="py-2  my-4 rounded-md text-center  flex justify-around">
            <ReactPlayer
              url="https://youtu.be/XtJWeGk6PSs"
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
