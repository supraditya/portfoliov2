import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import fontncolor from "../../public/assets/dusk-security/font-and-colors.png";
import projectImg from "../../public/assets/dusk-security/dusk-security.png";
import Highlights from "../../components/ProjectPage/Highlights";
import Head from "next/head";
export default function DuskSecurity() {
  return (
    <>
      <Head>
        <title>Dusk Security | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="Dusk Security"
          subtitle="A logo, website and internal-use web portal for a budding cybersecurity consulting start-up based in Jammu."
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center bg-blue-200 flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="Dusk Security header"
            className="w-4/5 md:w-2/5 mt-5"
          ></Image>
          <Image
            src={fontncolor}
            alt="font and colors used"
            className="w-4/5 md:w-1/3 object-contain mt-5"
          ></Image>
        </div>
        <Highlights
          summary="Dusk Security is a cybersecurity firm based in Jammu, India. Then being a recently created start-up, the firm needed a new logo, a landing page and an internal full-stack web application for shipment tracking."
          roles={["Graphic Designer"]}
          team={[
            "Lakhan Nad",
            "Web Development Team @ IEEE Computer Society-VIT ",
          ]}
          timeline="Aug 2022 - Dec 2022"
          tools={["Figma", "Adobe Illustrator"]}
        />
        <h3 className="font-primary text-xl mb-1">My Contribution</h3>
        <p className="font-secondary text-lg font-light text-justify mb-8">
          This was a project that I led as the Projects Head of IEEE-CS VIT. I
          was the sole designer working on the logo ideation and design, and the
          landing page design. I then supervised the development of the landing
          page and application, and reviewed updates and changes, all while
          providing feedback, and sourcing the same from our clients.
        </p>
      </Wrapper>
    </>
  );
}
