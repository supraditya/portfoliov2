import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import projectImg from "../../public/assets/linkspace/linkspace.png";
import ReactPlayer from "react-player/youtube";
import Highlights from "../../components/ProjectPage/Highlights";
import ActionButton from "../../components/ActionButton";
import { BsGlobe2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
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
        <title>LinkSpace | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="LinkSpace"
          subtitle="An online, collaborative internet bookmark folder."
        />
        <ActionButton
          link="https://docs.google.com/presentation/d/1S5eGSefTJWO0pifdZUaLoFoCV_mh9CbdpSw8U1S9jWk/edit?usp=sharing"
          icon={<BsGlobe2 />}
          label="Poster"
        />
        <ActionButton
          link="https://github.com/supraditya/LinkSpace"
          icon={<FaGithub />}
          label="Source Code"
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center bg-blue-200 flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="linkspace header"
            className="w-4/5 mt-2"
          ></Image>
        </div>
        <Highlights
          summary="Developed as a side project during my time interning at the University of Michigan Information Technology Services (ITS), LinkSpace allows groups of individuals to consolidate their online resources regardless of which web application they belong to, similar to a personal bookmark folder. LinkSpace also allows you to invite new members to a group via email, and add or remove admins for each group, similar to messaging applications such as WhatsApp."
          roles={[
            "Fullstack Developer",
            "UX Researcher",
          ]}
          team={["Luke O'Malley"]}
          timeline="Aug 2023 - Dec 2023"
          tools={[
            "Ruby on Rails",
            "TailwindCSS",
          ]}
        />
        <h3 className="font-primary text-3xl mt-3 mb-2 font-medium">
          Final Demo
        </h3>
        {hasWindow && (
          <div className="py-2  my-4 rounded-md text-center  flex justify-around">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jHhkDhHdu78"
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
