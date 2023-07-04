import { getAllProjectIds, getProjectData } from '../../lib/projects';

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

export default function Post({ projectData }) {
  return (
    <div>
      {projectData.title}
      <br />
      {projectData.id}
      <br />
      {projectData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </div>
  );
}

