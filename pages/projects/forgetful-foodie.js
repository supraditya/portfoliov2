import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import projectImg from "../../public/assets/forgetful-foodie/forgetful-foodie.png";
import poster from "../../public/assets/forgetful-foodie/poster.png";
import storyboard1 from "../../public/assets/forgetful-foodie/storyboard-1.png";
import storyboard2 from "../../public/assets/forgetful-foodie/storyboard-2.png";
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
        <h3 className="font-primary text-3xl mb-1 font-medium">
          Phase 1: Discovery and Research
        </h3>
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
        <ul className="list-decimal pl-8 pr-6 text-justify text-lg mt-1 font-secondary">
          <li className="font-semibold mt-2">
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
        <h3 className="font-primary text-3xl mt-3 mb-2 font-medium">
          Phase 2: Design
        </h3>
        <p className="font-secondary font-light text-lg text-justify my-2">
          After outlining the problem, and gathering insights, we began painting
          a picture with the information gathered. This led us to plotting out
          user scenarios, finalizing application features and flow, and
          collecting and reviewing peer and user feedback.
        </p>
        <h3 className="font-primary text-xl mb-1">Storyboards</h3>
        <p className="font-secondary font-light text-lg">
          After interviewing our target demographic, we were able to get a
          better picture of why it tended to be so hard to avoid food wastage in
          our fast-paced daily lives. We began sketching out our findings, and
          ended up with the following scenarios:
        </p>
        <div className="p-8 my-4 rounded-md text-center bg-gray-100">
          <Image
            src={storyboard1}
            alt="poster"
            className="mx-auto w-5/6"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Scenario 1: Abby's Bananas
        </p>
        <div className="p-8 my-4 rounded-md text-center bg-gray-100">
          <Image
            src={storyboard2}
            alt="poster"
            className="mx-auto w-5/6"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Scenario 2: Nathan's Dilemma
        </p>
        <p className="font-secondary font-light text-lg">
          These illustrations were based off of a combination of insights
          gathered from our users, and from personal experiences handling and
          managing our own households. This gave us some definite problems to
          work towards solving, thus acting as a catalyst for ideation.<br></br>
          Our primary goals were:
        </p>
        <ul className="list-disc font-secondary text-lg font-light pl-8 text-justify">
          <li>
            To intuitively visualize how much of something a user has, and when
            it will go bad
          </li>
          <li>
            To help users make tasty and nutritious meals out of whatever they
            have in the pantry at any given time, to ensure that nothing goes to
            waste!
          </li>
        </ul>
        <h3 className="font-primary text-xl mb-1">Pain Points</h3>
        <p className="font-secondary font-light text-lg">
          Based on the feedback we had received from the initial target users,
          we were determined to make forgetful foodie as convenient to use and
          update as possible. Our 'Pantry Health' feature, intended to allow
          users to quickly glance through what and how much of something they
          have at any given time, was the product of this thinking. <br></br>A
          few pain points that arose were:
        </p>
        <ul className="list-disc font-secondary text-lg font-light pl-8 text-justify">
          <li>
            The tedium of updating one's inventory every time new things are
            bought and ready to be stored.
          </li>
          <li>
            The logging of individual items' expiry dates and their accuracy
          </li>
          <li>
            Sometimes recipes call for extremely specific ingredients, and can
            be either too difficult or time consuming to prepare for the
            everyday user.
          </li>
        </ul>
        <p className="font-secondary font-light text-lg mt-1">
          We attempted to solve these problems through brainstorming appropriate
          features, which led to coming up with:
        </p>
        <ul className="font-secondary text-lg font-light  text-justify mt-1">
          <li>
            <p className="italic mb-2 font-secondary font-medium">
              Alternative methods to update inventory such as receipt scanning,
              barcode scanning, item recognition
            </p>
            <p>
              By using technologies such as object detection and OCR, we could
              make receipt scanning a viable option for users who’ve just bought
              groceries and are turned off by having to manually add each item
              into forgetful foodie before they even get to stocking it.
            </p>
          </li>
          <li className="mt-2">
            <p className="italic mb-2 font-secondary font-medium">
              User-curated recipes that only display recipes to a user if they
              have most or all of the ingredients listed
            </p>
            <p>
              We realized that by adding the user-curated spin to recipes, we
              can:
            </p>
            <ul className="pl-8 list-disc text-md">
              <li>
                Make recipe dishes realistic to prepare, and also gauge
                difficulty.
              </li>
              <li>
                Ensure that users are able to cook dishes that match the
                regional and cultural staples around them, and ensure that users
                are exposed to healthier ‘home-cooked’ options which are
                sustainable in the long term.
              </li>
              <li>
                We could also auto-deduct items for a user’s inventory, thus
                eliminating an update step and improving the overall UX.
              </li>
            </ul>
            <p>
              This led us to develop the initial user flow, and to illustrate
              the a lofi prototype of the UI through paper prototyping.
            </p>
          </li>
        </ul>
      </Wrapper>
    </>
  );
}
