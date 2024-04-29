import Navbar from "../../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const [projectTab, setprojectTab] = useState("All");
  const handleTabChange = (newTab) => {
    setprojectTab(newTab);
  };
  return (
    <>
      <Head>
        <title>Projects | Aditya Menon</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <div className="px-10 md:px-32 mb-10">
        <p className="text-4xl md:text-7xl font-primary mb-5">My Projects</p>
        <div className="flex-wrap lg:w-4/5 xl:w-1/2 flex justify-start md:justify-between font-secondary text-xl">
          <button
            aria-label="Show all projects"
            className={`${
              projectTab === "All" ? "bg-black text-white" : ""
            } mr-2 px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("All");
            }}
          >
            All
          </button>
          <button
            aria-label="Show featured projects"
            className={`${
              projectTab === "Featured" ? "bg-black text-white" : ""
            } mr-2 px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Featured");
            }}
          >
            Featured
          </button>

          <button
            aria-label="Filter and only show design projects"
            className={`${
              projectTab === "Design" ? "bg-black text-white" : ""
            } mx-2 px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Design");
            }}
          >
            Design
          </button>
          <button
            aria-label="Filter and only show development projects"
            className={`${
              projectTab === "Development" ? "bg-black text-white" : ""
            } mr-2 px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Development");
            }}
          >
            Development
          </button>
          <button
            aria-label="Filter and only show case studies"
            className={`${
              projectTab === "Case Study" ? "bg-black text-white" : ""
            } mx-2 px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Case Study");
            }}
          >
            Case&nbsp;Studies
          </button>
        </div>
        {/* Manually ordered in alphabetical order of title */}
        <div className="mt-4 sm:grid xl:grid-cols-3 lg:grid-cols-2 gap-x-8 justify-start">
          <ProjectCard
            currentTab={projectTab}
            title="Forgetful Foodie"
            image="forgetful-foodie"
            link="forgetful-foodie"
            domains={["Featured", "All", "Case Study", "Design"]}
          />
          <ProjectCard
            currentTab={projectTab}
            title="UpTap"
            image="uptap"
            link="uptap"
            domains={["All", "Development"]}
          />
          <ProjectCard
            currentTab={projectTab}
            title="Automotive Interaction Design"
            image="uptap"
            link="auto-ux"
            domains={["All", "Design",]}
          />
          <ProjectCard
            currentTab={projectTab}
            title="ARiadne"
            image="ariadne"
            link="ariadne"
            domains={["Featured", "All", "Case Study", "Design", "Augmented Reality"]}
          />
          <ProjectCard
            currentTab={projectTab}
            title="LinkSpace"
            image="linkspace"
            link="linkspace"
            domains={["All", "Development"]}
          />

          <ProjectCard
            currentTab={projectTab}
            title="Cryptogods: Anubis"
            image="cryptogods-anubis"
            link="cryptogods-anubis"
            domains={["All", "Development", "Web3"]}
          />
          <ProjectCard
            currentTab={projectTab}
            title="Dr. Menon's Palliative Care"
            image="palliative-care"
            link="palliative-care"
            domains={["All", "Case Study", "Design"]}
          />
          <ProjectCard
            currentTab={projectTab}
            title="Dusk Security"
            image="dusk-security"
            link="dusk-security"
            domains={["All", "Design", "Development"]}
          />

          <ProjectCard
            currentTab={projectTab}
            title="IEEE Computer Society - VIT"
            image="ieee-cs-vit"
            link="ieee-cs-vit"
            domains={["All", "Development", "Project Management"]}
          />

          <ProjectCard
            currentTab={projectTab}
            title="Refugee One"
            image="refugee-one"
            link="refugee-one"
            domains={["All", "Contextual Inquiry", "Consulting"]}
          />
          <ProjectCard
            currentTab={projectTab}
            title="The Portfolio Journey"
            image="portfolio-website"
            link="portfolio-website"
            domains={["Featured", "All", "Case Study", "Design", "Development"]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-secondary text-center mx-auto text-lg">
          Want to know more about me?
        </p>
        <Link href="about" alt="Link to about" className="mx-auto pb-4">
          <button
            aria-label="View about Page"
            className="font-primary text-base border border-black rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out"
          >
            Visit My About Page
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
