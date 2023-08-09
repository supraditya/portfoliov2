import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import fontncolorv1 from "../../public/assets/portfolio-website/font-and-colors-v1.png";
import fontncolorv2 from "../../public/assets/portfolio-website/font-and-colors-v2.png";

import projectImg from "../../public/assets/portfolio-website/portfolio-website.png";
import Highlights from "../../components/ProjectPage/Highlights";
import Head from "next/head";
export default function PortfolioWebsite() {
  return (
    <>
      <Head>
        <title>The Portfolio Journey | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="The Portfolio Journey"
          subtitle="The journey encompassing the vision, lessons learned, and execution of two iterations of my portfolio website"
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center bg-blue-200 flex max-sm:flex-col items-center justify-around">
          <Image
            src={fontncolorv2}
            alt="font and colors used"
            className="w-4/5 md:w-1/4 object-contain mt-5"
          ></Image>
          <Image
            src={projectImg}
            alt="portfolio website header"
            className="w-4/5 md:w-2/5 mt-5"
          ></Image>
          <Image
            src={fontncolorv1}
            alt="font and colors used"
            className="w-4/5 md:w-1/4 object-contain mt-5"
          ></Image>
        </div>
        <Highlights
          summary="Initially developed as a way for me to showcase my work as a Frontend Web Developer, I soon realized that my requirements had far surpassed the capabilities of my original website and its underlying technology. This gave me a chance to return to the drawing board and create a new website from scratch, one that perfectly encapsulates what I can do: Design, Develop and everything in between."
          roles={["Web Developer", "UX Researcher", "Graphic Designer"]}
          team={[]}
          timeline="Nov 2021 - Jun 2023"
          tools={["Figma", "Adobe Illustrator", "NextJS", "TailwindCSS", "Trello"]}
        />
        <p className="italic text-center text-lg text-gray-500 my-4">
          Full Case Study Coming Soon!
        </p>
      </Wrapper>
    </>
  );
}
