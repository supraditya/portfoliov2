import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
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
        <div className="py-4 my-4 rounded-md text-center bg-gray-100">
          <Image
            src={projectImg}
            alt="Portfolio journey header"
            className="w-2/5 mx-auto mt-5"
          ></Image>
        </div>
        <Highlights
          summary="Forgetful Foodie was ideated and designed as part of our coursework with the Master of Science in Information (MSI) program at the University of Michigan, for the course “Introduction to Interaction Design”. I collaborated with two fellow graduate students to ideate and design a smartphone application to reduce food wastage by streamlining pantry and inventory management for the average household owner."
          roles={["Graphic Designer"]}
          team={[]}
          timeline="Aug 2022 - Dec 2022"
          tools={["Figma", "Adobe Illustrator"]}
        />
      </Wrapper>
    </>
  );
}
