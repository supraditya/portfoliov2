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
        <h3 className="font-primary text-xl mb-1">Our Initial Solution</h3>
        <p className="font-secondary text-lg font-light text-justify">
          This conundrum led us to come up with Forgetful Foodie: a smartphone
          application designed to help users consume all their perishable food
          items before they go bad through:
        </p>
        <ul className="list-disc font-secondary text-lg font-light pl-8 text-justify">
          <li>Individual item age and quantity tracking</li>
          <li>
            By suggesting appropriate recipes to tactfully use at-risk
            ingredients!
          </li>
        </ul>
        <div className="py-8 px-8 my-4 rounded-md text-center bg-gray-100">
          <Image src={poster} alt="poster" className="mx-auto"></Image>
        </div>

        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Promotional Poster for Forgetful Foodie
        </p>
        <h3 className="font-primary text-xl mb-1">Discovery and Research</h3>
        <p className="font-secondary text-lg font-light text-justify">
          We aimed to design primarily for adult grocery shoppers who shop on
          behalf of a household, either just for themselves or also for other
          loved ones. So, we interviewed a few of these potential users, from
          various age demographics, cultures, and ethnicities. Here are some
          interesting excerpts from the process:
        </p>
        <ul className="font-secondary text-lg font-light flex items-baseline text-justify justify-between mt-4">
          <li className="w-1/3 pr-10">
            <p className="italic mb-2">
              Q. How do you keep track of your groceries?
            </p>
            <p>
              "I visually inspect my pantry and fridge, and make mental notes of
              what I have and what I might soon run out of."
            </p>
          </li>
          <li className="w-1/3 px-10">
            <p className="italic mb-2">
              Q. Have you ever used technology to manage your pantry inventory
              or eating habits?
            </p>
            <p className="mb-3">
              "I have often ordered groceries online, but tracking my pantry
              inventory and eating habits has been a chore to track digitally."
            </p>
            <p className="mb-3">
              "I feel like micromanaging what I eat could lead to me developing
              an eating disorder."
            </p>
            <p className="mb-3">
              "I feel like individually and painstakingly logging every single
              item I eat throughout the day is too much of a chore for me."
            </p>
          </li>
          <li className="w-1/3 pl-10">
            <p className="italic mb-2">
              Q. How do you feel about personal food wastage?
            </p>
            <p>
              "I feel extremely guilty. I hate wasting leftovers, so having to
              throw out ingredients as they expire before I can use them is a
              particularly frustrating process for me."
            </p>
          </li>
        </ul>
        <h3 className="font-primary text-xl mb-1">Insights Gathered</h3>
        <p className="font-secondary text-lg font-light text-justify">
          All in all, people rarely used dedicated applications to manage their
          pantry. They either took notes, or kept a mental note of what they had
          and needed soon.
        </p>
        <ul className="list-decimal pl-8 pr-6 text-justify text-lg mt-2">
          <li className="font-semibold mt-4">
            People were observed to keep track of pantry items through visual
            inspection and memory, which was found to be unreliable
          </li>
          <p className="font-light">
            The interviewees primarily relied on visually examining their pantry
            contents and memorizing them, resulting in forgetfulness and food
            wastage. Doubt about the freshness of items and double-buying were
            common issues, indicating that this method is inadequate for
            tracking pantry inventory, as expressed by all participants.
          </p>
          <li className="font-semibold mt-4">
            Existing apps meant to track inventory and eating habits were
            perceived to be 'too impractical to be convenient'
          </li>
          <p className="font-light">
            While some interviewees found inputting every meal and minute
            details frequently into an app frustrating, another interviewee was
            concerned about developing eating disorders by tracking their eating
            habits too closely.
          </p>
        </ul>
      </Wrapper>
    </>
  );
}
