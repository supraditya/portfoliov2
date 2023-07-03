import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import FeaturedProject from "../../components/FeaturedProject";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Projects({ allPostsData }) {
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
        {/* <p className="text-7xl font-primary mb-5">My Projects</p> */}
        <div className="flex flex-col w-full mb-8">
          <div className="mb-10"></div>
          <FeaturedProject
            title="Forgetful Foodie"
            id="forgetful-foodie"
            domains={["All", "Case Study", "Design"]}
            flow="left"
          />
          <div className="mb-10"></div>
          <FeaturedProject
            title="Forgetful Foodie"
            id="forgetful-foodie"
            domains={["All", "Case Study", "Design"]}
            flow="right"
          />
          <div className="mb-10"></div>
          <FeaturedProject
            title="Forgetful Foodie"
            id="forgetful-foodie"
            domains={["All", "Case Study", "Design"]}
            flow="left"
          />
          <div className="mb-10"></div>
        </div>
        <p className="text-7xl font-primary mb-5">All Projects</p>
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
              projectTab === "Case Study" ? "bg-black text-white" : ""
            } px-1.5 py-1 rounded-md`}
            onClick={() => {
              handleTabChange("Case Study");
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
        <div className="mt-4 grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-8 justify-start">
          {allPostsData.map(({ id, date, title, domains }) => (
            <ProjectCard
              currentTab={projectTab}
              id={id}
              title={title}
              domains={domains}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
