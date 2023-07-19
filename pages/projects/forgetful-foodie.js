import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import projectImg from "../../public/assets/forgetful-foodie/forgetful-foodie.png";
import poster from "../../public/assets/forgetful-foodie/poster.png";
import Highlights from "../../components/ProjectPage/Highlights";
import Head from "next/head";

export default function forgetfulFoodie() {
  return (
    <>
      {/* TODO: Make ProjectPage components for every type of content arrangement as depicted on figma */}
      <Head>
        <title>Forgetful Foodie | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="Forgetful Foodie"
          subtitle="Always know what you have in the kitchen, and what dishes you can make using them."
        />
        <div className="py-4 my-4 rounded-md text-center bg-blue-300">
          <Image
            src={projectImg}
            alt="forgetful foodie header"
            className="w-2/5 mx-auto mt-5"
          ></Image>
        </div>
        <Highlights
          summary="Forgetful Foodie was ideated and designed as part of our coursework with the Master of Science in Information (MSI) program at the University of Michigan, for the course “Introduction to Interaction Design”. I collaborated with two fellow graduate students to ideate and design a smartphone application to reduce food wastage by streamlining pantry and inventory management for the average household owner."
          roles={["UX Designer", "UX Researcher"]}
          team={["Saumya Bora", "Coulton Theuer"]}
          timeline="Aug 2022 - Dec 2022"
          tools={["Figma", "Adobe Illustrator"]}
        />
        <h3 className="font-primary text-xl mb-1">The Problem</h3>
        <p className="font-secondary text-lg font-light text-justify">
          Household food wastage has been a significant problem globally.
          According to the American Journal of Agricultural Economics, the
          average American household ends up wasting up to 31.9% of the food
          they purchase! This is caused in part due to the amount of mental
          effort required in keeping track of household food inventory so that
          everything is used up before it expires and the amount of time and
          effort it takes to meal-plan and determine the dish that tastes good,
          is easy to prepare, and uses an adequate amount of ingredients.{" "}
          <br></br> Thus, we wondered:
        </p>
        <p className="font-secondary text-xl text-yellow-600 font-base px-20 py-4 text-center italic">
          How we might help people to safely consume all the highly perishable
          foods in their pantry without wastage, while simultaneously
          alleviating some of the mental burden of managing a household?
        </p>
        <h3 className="font-primary text-xl mb-1">Our Solution</h3>
        <p className="font-secondary text-lg font-light text-justify">
          This conundrum led us to come up with Forgetful Foodie: a smartphone
          application designed to help users consume all their perishable food
          items before they go bad through:
        </p>
        <ul className="list-disc font-secondary text-lg font-light pl-8 text-justify">
          <li>Individual item age and quantity tracking</li>
          <li>By suggesting appropriate recipes to tactfully use at-risk ingredients!</li>
          <li>By focusing on user-curated recipes to increase user engagement, and encourage 'home-cooked' recipes as opposed to complex and hard-to-follow preparations </li>
        </ul>
        <div className="py-8 px-8 my-4 rounded-md text-center bg-gray-100">
        <Image
            src={poster}
            alt="poster"
            className="mx-auto"
          ></Image>
        </div>
 
          <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
            Promotional Poster for Forgetful Foodie
          </p>

      </Wrapper>
    </>
  );
}
