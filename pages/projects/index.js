import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import FeaturedProject from "../../components/FeaturedProject";

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
        {/* <p className="text-7xl font-primary mb-5">My Projects</p> */}
        <div className="flex flex-col w-fit md:w-full mt-4 mb-4 md:mt-10 md:mb-14">
          <FeaturedProject
            title="Forgetful Foodie"
            domains={["All", "Case Study", "Design"]}
            flow="left"
            link="forgetful-foodie"
            image="forgetful-foodie"
          />
          <div className="mb-10"></div>
          <FeaturedProject
            title="Dr. Menon's Palliative Care"
            domains={["All", "Case Study", "Graphic Design"]}
            flow="right"
            link="palliative-care"
            image="palliative-care"
          />
          <div className="mb-10"></div>

          <FeaturedProject
            title="Forgetful Foodie"
            domains={["All", "Design"]}
            flow="left"
            link="forgetful-foodie"
            image="forgetful-foodie"
          />
        </div>
        <p className="text-4xl md:text-7xl font-primary mb-5">All Projects</p>
        <div className="flex-wrap lg:w-4/5 xl:w-1/2 flex justify-start md:justify-between font-secondary text-xl">
          <button
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
            className={`${
              projectTab === "Case Study" ? "bg-black text-white" : ""
            } mx-2 px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Case Study");
            }}
          >
            Case&nbsp;Studies
          </button>
          <button
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
            className={`${
              projectTab === "Others" ? "bg-black text-white" : ""
            } mx-2 px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Others");
            }}
          >
            Others
          </button>
        </div>
        <div className="mt-4 sm:grid xl:grid-cols-3 lg:grid-cols-2 gap-x-8 justify-start">
          <ProjectCard
            currentTab={projectTab}
            domains={["All", "Case Study", "Design"]}
          />
          <ProjectCard
            currentTab={projectTab}
            domains={["All", "Development"]}
          />
          <ProjectCard currentTab={projectTab} domains={["All", "Design"]} />
          <ProjectCard currentTab={projectTab} domains={["All", "Others"]} />
          <ProjectCard
            currentTab={projectTab}
            domains={["All", "Development"]}
          />
          <ProjectCard currentTab={projectTab} domains={["All", "Others"]} />
        </div>
      </div>

      <Footer />
    </>
  );
}
