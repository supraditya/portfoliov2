import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import fontncolor from "../../public/assets/cryptogods-anubis/font-and-colors.png";
import projectImg from "../../public/assets/cryptogods-anubis/cryptogods-anubis.png";
import Highlights from "../../components/ProjectPage/Highlights";
import ActionButton from "../../components/ActionButton";
import { BsGlobe2 } from "react-icons/bs";

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
          title="Automotive Interaction Design"
          subtitle="Making mass-market Electric Vehicles (EVs) more approachable through intuitive animations, considerate interactions and a reimagined 'Dog Mode'"
        />
        <ActionButton
          link="https://cryptogodsanubis.netlify.app/"
          icon={<BsGlobe2 />}
          label="Website"
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center bg-blue-200 flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="cryptogods anubis header"
            className="w-4/5 md:w-2/5 mt-5"
          ></Image>
          <Image
            src={fontncolor}
            alt="font and colors used"
            className="w-4/5 md:w-1/3 object-contain mt-5"
          ></Image>
        </div>
        <Highlights
          summary="Cryptogods Anubis is an NFT project founded in 2022. They required a new landing page, along with a minting website for their token. Two websites, one database application to keep track of minted tokens, and several graphic assets were developed for the team during this project."
          roles={[
            "Fullstack Developer",
            "Web3 Developer",
            "Graphic Designer",
            "UX Designer",
          ]}
          team={[]}
          timeline="Mar 2022 - May 2022"
          tools={[
            "Figma",
            "Adobe Illustrator",
            "React",
            "Netlify",
            "Matic (Polygon)",
          ]}
        />
        <iframe
          width="100%"
          height="600"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMoK7Ok835HMGgh4oLpoNij%2FAssignment-5%3Ftype%3Ddesign%26node-id%3D850-28691%26t%3DRbdWvlCFz3Zv6WvD-1%26scaling%3Dscale-down%26page-id%3D456%253A12040%26starting-point-node-id%3D850%253A28691%26mode%3Ddesign"
          allowFullScreen
        ></iframe>
      </Wrapper>
    </>
  );
}
