import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import ActionButton from "../../components/ActionButton";
import Image from "next/image";
import fontncolor from "../../public/assets/palliative-care/font-and-colors.png";
import projectImg from "../../public/assets/palliative-care/palliative-care.png";
import Highlights from "../../components/ProjectPage/Highlights";
import {FaFigma} from "react-icons/fa";
import Head from "next/head";
export default function PalliativeCare() {
  return (
    <>
      <Head>
        <title>Dr. Menon's Palliative Care | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:url" content="https://www.supraditya.com/projects/palliative-care" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.supraditya.com/assets/palliative-care/palliative-care.png"
        />
      </Head>
      <Wrapper>
        <Header
          title="Dr. Menon's Palliative Care"
          subtitle="An old age home that specializes in holistic healing and growth."
        />
        <ActionButton link="https://www.figma.com/file/A6YfWv2cVPNOfp065cL2pU/Mom's-Website?node-id=0%3A1&t=3Yh17gzVfGuswQn2-3" label="Design" icon={<FaFigma/>}/>
        <div className="py-4 my-2 md:my-4 rounded-md text-center bg-blue-200 flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="palliative care header"
            className="w-4/5 md:w-2/5 mt-5"
          ></Image>
          <Image
            src={fontncolor}
            alt="font and colors used"
            className="w-4/5 md:w-1/3 object-contain mt-5"
          ></Image>
        </div>
        <Highlights
          summary="I was tasked with creating a brand image and relevant promotional and print content for Dr Menon's Palliative Care: a geriatric rehabilitation center based in Thane, India."
          roles={["Graphic Designer"]}
          team={[]}
          timeline="Jun 2022 - Aug 2022"
          tools={["Figma", "Adobe Illustrator"]}
        />
        <p className="italic text-center text-lg text-gray-500 my-4">Full Case Study Coming Soon!</p>
      </Wrapper>
    </>
  );
}
