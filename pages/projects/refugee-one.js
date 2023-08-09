import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import projectImg from "../../public/assets/refugee-one/refugee-one.png";
import Highlights from "../../components/ProjectPage/Highlights";
import Head from "next/head";
export default function RefugeeOne() {
  return (
    <>
      <Head>
        <title>Refugee One | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="Refugee One"
          subtitle="A refugee resettlement organization punching way above its weight."
        />
        <div className="py-4 my-4 rounded-md text-center bg-gray-100">
          <Image
            src={projectImg}
            alt="Refugee One header"
            className="w-2/5 mx-auto mt-5"
          ></Image>
        </div>
        <Highlights
          summary="RefugeeOne is a Chicago-based refugee resettlement organization. A key aspect of RefugeeOne's activities is the process of matching their clients i.e. refugees to relevant job opportunities based on job location, pay, the number of dependents that each client has etc. However, there was no way for the organization member to efficiently sift through all the job listings, which led to a lot of mental overhead and frustration for the organization."
          roles={["Consultant", "UX Researcher"]}
          team={[]}
          timeline="Aug 2022 - Dec 2022"
          tools={["Figma", "Adobe Illustrator"]}
        />
        <h3 className="font-primary text-xl mb-1">Our Solution</h3>
        <p className="font-secondary text-lg font-light text-justify mb-8">
          We identified that a more in-depth application of Google Workspace,
          complete with its automation-friendly scripting and spreadsheet
          formulas was the ideal way for RefugeeOne to go. Given their limited
          budget and time constraint, we suggested hiring a Google Apps Script
          developer for a one-time feature addition to their currently existing
          database. Our long-term solution consisted of a full-stack dedicated
          web application for this process, which requires a greater investment
          of capital and time, along with occasional maintenance overheads.
        </p>
        <h3 className="font-primary text-xl mb-1">My Contribution</h3>
        <p className="font-secondary text-lg font-light text-justify mb-8">
          I was a part of a five-member team tasked with this problem. I was the
          sole member in the team with significant freelance web and application
          development experience, and thus I played a big part in the drafting
          of our eventual solution. I also conducted stakeholder interviews,
          analysed excerpts and co-created an affinity wall to draw better
          insights.
        </p>
      </Wrapper>
    </>
  );
}
