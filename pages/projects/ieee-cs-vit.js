import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import fontncolor from "../../public/assets/ieee-cs-vit/font-and-colors.png";
import projectImg from "../../public/assets/ieee-cs-vit/ieee-cs-vit.png";
import Highlights from "../../components/ProjectPage/Highlights";
import Head from "next/head";
export default function IeeeCsVit() {
  return (
    <>
      <Head>
        <title>IEEE-CS-VIT Org Website | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="IEEE-CS-VIT Org Website"
          subtitle="The organizational landing page for a renowned student organization based in Vellore, India."
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center bg-blue-200 flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="IEEE Computer Society VIT header"
            className="w-4/5 md:w-2/5 mt-5"
          ></Image>
          <Image
            src={fontncolor}
            alt="font and colors used"
            className="w-4/5 md:w-1/3 object-contain mt-5"
          ></Image>
        </div>
        <Highlights
          summary="IEEE-CS VIT's previous landing page needed significant updates. Having been developed using JQuery and Embedded JavaScript, we sought to use this project as a learning opportunity for the team to explore newer technical stacks for web development, such as GatsbyJS and React."
          roles={["Web Developer", "Project Manager"]}
          team={[]}
          timeline="Feb 2021 - Jun 2021"
          tools={["GatsbyJS", "React", "Netlify"]}
        />
        <h3 className="font-primary text-xl mb-1">My Contribution</h3>
        <p className="font-secondary text-lg font-light text-justify mb-8">
          I was the Projects Head and led a team of 7 developers, all of whom
          collaborated and iteratively worked on the design co-developed by the
          Design Head of IEEE-CS VIT and I.
        </p>
      </Wrapper>
    </>
  );
}
