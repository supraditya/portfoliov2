import Navbar from "../../components/Navbar";
import Head from "next/head";
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
      <div className="px-32 mb-10">
        <p className="text-7xl font-primary mb-5">Projects</p>
        <div className="w-1/2 flex justify-between font-secondary text-xl">
          <button
            className={`${
              projectTab === "All" ? "bg-black text-white" : ""
            } px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("All");
            }}
          >
            All
          </button>
          <button
            className={`${
              projectTab === "Case Studies" ? "bg-black text-white" : ""
            } px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Case Studies");
            }}
          >
            Case Studies
          </button>
          <button
            className={`${
              projectTab === "Design" ? "bg-black text-white" : ""
            } px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Design");
            }}
          >
            Design
          </button>
          <button
            className={`${
              projectTab === "Development" ? "bg-black text-white" : ""
            } px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Development");
            }}
          >
            Development
          </button>
          <button
            className={`${
              projectTab === "Others" ? "bg-black text-white" : ""
            } px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Others");
            }}
          >
            Others
          </button>
        </div>
        <div className="mt-1 flex flex-wrap justify-start">
          <ProjectCard currentTab={projectTab} domains={["All", "Case Studies", "Design"]}/>
          <ProjectCard currentTab={projectTab} domains={["All", "Development"]}/>
          <ProjectCard currentTab={projectTab} domains={["All", "Design"]}/>
          <ProjectCard currentTab={projectTab} domains={["All", "Others"]}/>
          <ProjectCard currentTab={projectTab} domains={["All", "Development"]}/>
          <ProjectCard currentTab={projectTab} domains={["All", "Others"]}/>
        </div>
      </div>

      <Footer />
    </>
  );
}
