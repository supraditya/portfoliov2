import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import projectImg from "../../public/assets/uptap/uptap.png";
import ReactPlayer from "react-player/youtube";
import Highlights from "../../components/ProjectPage/Highlights";
import ActionButton from "../../components/ActionButton";
import { BsGlobe2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

import Head from "next/head";
export default function Uptap() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>UpTap | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="UpTap"
          subtitle="Sharing and storing slices of people's identities has never been easier."
        />
        <ActionButton
          link="https://docs.google.com/presentation/d/1WNzdho7FehkBcK2PQayZsJ-Lx2pzNuWy1m3A5mRVMMY/edit?usp=sharing"
          icon={<BsGlobe2 />}
          label="Presentation"
        />
        <ActionButton
          link="https://github.com/supraditya/uptap"
          icon={<FaGithub />}
          label="Source Code"
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="uptap header"
            // className="w-4/5 mt-2"
          ></Image>
        </div>
        <Highlights
          summary="Developed as part of our final project for the course SI 669: Developing Mobile Software Experiences, UpTap is a digital business card sharing application, that allows users to create and share different profile cards based on the setting through a simple QR code. Want your close friends to have your phone number but only your university email for your fellow team members? UpTap has got you covered."
          roles={[
            "Fullstack Developer",
            "App Developer",
            "UX Researcher",
          ]}
          team={["Rena Shen", "Spandan Sharma"]}
          timeline="Oct 2023 - Dec 2023"
          tools={[
            "React Native",
            "TailwindCSS",
            "Redux",
            "Firebase",
          ]}
        />
        <h3 className="font-primary text-3xl mt-3 mb-2 font-medium">
          Final Demo
        </h3>
        {hasWindow && (
          <div className="py-2  my-4 rounded-md text-center  flex justify-around">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=NVuj_h_TS3Q"
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
