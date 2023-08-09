import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import fontncolor from "../../public/assets/cryptogods-anubis/font-and-colors.png";
import projectImg from "../../public/assets/cryptogods-anubis/cryptogods-anubis.png";
import Highlights from "../../components/ProjectPage/Highlights";
import Head from "next/head";
export default function CryptogodsAnubis() {
  return (
    <>
      <Head>
        <title>Cryptogods Anubis | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="Cryptogods: Anubis"
          subtitle="A Website and minting pipeline for an NFT Collection starring the Egyptian God of the Dead."
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
          roles={["Fullstack Developer", "Web3 Developer", "Graphic Designer", "UX Designer"]}
          team={[]}
          timeline="Aug 2022 - Dec 2022"
          tools={["Figma", "Adobe Illustrator"]}
        />
      </Wrapper>
    </>
  );
}
