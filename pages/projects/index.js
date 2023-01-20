import Navbar from "../../components/Navbar";
import Head from "next/head";

export default function Projects() {
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
      <div>
        <p>Projects Page</p>
      </div>
    </>
  );
}
