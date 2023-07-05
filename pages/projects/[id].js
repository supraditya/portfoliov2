import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer";
import { getAllProjectIds, getProjectData } from "../../lib/projects";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const projectData = await getProjectData(params.id);

  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
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
      <div className="px-32">
        <p className="text-7xl font-primary mb-5">{projectData.title}</p>
        <p className="text-4xl font-secondary text-subtitleGray font-light mb-5">{projectData.subtitle}</p>
        <p>{projectData.timeline}</p>
        <p>
          {projectData.domains.slice(1).map((domain, i) => {
            return i !== projectData.domains.length - 2 ? (
              <span key={i}>{domain}, </span>
            ) : (
              <span key={i}>{domain}</span>
            );
          })}
        </p>

        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </div>

      <Footer />
    </>
  );
}
