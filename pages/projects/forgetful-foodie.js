import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player/vimeo";
import projectImg from "../../public/assets/forgetful-foodie/forgetful-foodie.png";
import fontncolor from "../../public/assets/forgetful-foodie/font-and-colors.png";
import poster from "../../public/assets/forgetful-foodie/poster.png";
import storyboard1 from "../../public/assets/forgetful-foodie/storyboard-1.png";
import storyboard2 from "../../public/assets/forgetful-foodie/storyboard-2.png";
import paperproto1 from "../../public/assets/forgetful-foodie/paper-prototype-1.png";
import paperproto2 from "../../public/assets/forgetful-foodie/paper-prototype-2.png";
import paperproto3 from "../../public/assets/forgetful-foodie/paper-prototype-3.png";
import paperproto4 from "../../public/assets/forgetful-foodie/paper-prototype-4.png";
import proto1 from "../../public/assets/forgetful-foodie/prototype-1.png";
import proto2 from "../../public/assets/forgetful-foodie/prototype-2.png";
import proto3 from "../../public/assets/forgetful-foodie/prototype-3.png";
import barcode1 from "../../public/assets/forgetful-foodie/barcode-1.png";
import barcode2 from "../../public/assets/forgetful-foodie/barcode-2.png";
import itemRecog1 from "../../public/assets/forgetful-foodie/item-recog-1.png";
import itemRecog2 from "../../public/assets/forgetful-foodie/item-recog-2.png";
import recipe1 from "../../public/assets/forgetful-foodie/recipe-1.png";
import recipe2 from "../../public/assets/forgetful-foodie/recipe-2.png";
import recipe3 from "../../public/assets/forgetful-foodie/recipe-3.png";
import revision1 from "../../public/assets/forgetful-foodie/revision-1.png";
import revision2 from "../../public/assets/forgetful-foodie/revision-2.png";
import revision3 from "../../public/assets/forgetful-foodie/revision-3.png";
import revision4 from "../../public/assets/forgetful-foodie/revision-4.png";
import revision5 from "../../public/assets/forgetful-foodie/revision-5.png";
import Highlights from "../../components/ProjectPage/Highlights";
import ActionButton from "../../components/ActionButton";
import { FaFigma } from "react-icons/fa";
import {BsArrowUp} from "react-icons/bs";

export default function forgetfulFoodie() {
  // State to render ReactPlayer after window is loaded, to avoid HydrationError
  const [hasWindow, setHasWindow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
    document.addEventListener("scroll", () => {
      // Returns true if the window is scrolled, else returns false
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <>
      {/* TODO: Make ProjectPage components for every type of content arrangement as depicted on figma */}
      <Head>
        <title>Forgetful Foodie - Projects | Aditya Menon</title>
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
        <ActionButton
          link="https://www.figma.com/proto/HUxf0bhkT3OOsViPuXPg1J/SI-582%3A-Forgetful-Foodie?node-id=133-21"
          icon={<FaFigma />}
          label="Prototype"
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center bg-blue-200 flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="forgetful foodie header"
            className="w-4/5 md:w-2/5 mt-5"
          ></Image>
          <Image
            src={fontncolor}
            alt="font and colors used"
            className="w-4/5 md:w-1/3 object-contain mt-5"
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
        <p className="font-secondary text-xl text-yellow-600 font-base px-10 md:px-20 py-4 text-center italic">
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
        <div className=" my-4 rounded-md text-center">
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
        <ul className="font-secondary text-lg font-light flex flex-col md:flex-row items-baseline text-justify justify-between mt-4">
          <li className="md:w-1/3 md:pr-10">
            <p className="italic mb-2">
              Q. How do you keep track of your groceries?
            </p>
            <p>
              "I visually inspect my pantry and fridge, and make mental notes of
              what I have and what I might soon run out of."
            </p>
          </li>
          <li className="md:w-1/3 md:px-10">
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
          <li className="md:w-1/3 md:pl-10">
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
        <div className=" my-4 rounded-md text-center ">
          <Image src={storyboard1} alt="poster" className="mx-auto"></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic mb-6 text-subtitleGray">
          Scenario 1: Abby's Bananas
        </p>
        <div className=" my-4 rounded-md text-center ">
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
              make receipt scanning a viable option for users who've just bought
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
                are exposed to healthier 'home-cooked' options which are
                sustainable in the long term.
              </li>
              <li>
                We could also auto-deduct items for a user's inventory, thus
                eliminating an update step and improving the overall UX.
              </li>
            </ul>
            <p>
              This led us to develop the initial user flow, and to illustrate
              the a lofi prototype of the UI through paper prototyping.
            </p>
          </li>
        </ul>
        <h3 className="font-primary text-xl mb-1">Paper Prototypes</h3>
        <div className=" my-4 rounded-md text-center flex flex-wrap justify-around">
          <Image
            src={paperproto1}
            alt="paper prototype 1"
            className="mx-auto w-2/3 sm:w-1/4"
          ></Image>
          <Image
            src={paperproto2}
            alt="paper prototype 2"
            className="mx-auto w-2/3 sm:w-1/4"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Flow 1: Pantry Health
        </p>
        <div className="  my-4 rounded-md text-center ">
          <Image
            src={paperproto3}
            alt="paper prototype 3"
            className="mx-auto sm:w-3/5"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Flow 2: Receipt Scanning
        </p>
        <div className="  my-4 rounded-md text-center ">
          <Image
            src={paperproto4}
            alt="paper prototype 4"
            className="mx-auto sm:w-3/5"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Flow 3: "Try a Recipe!"
        </p>
        <p className="mb-2 font-secondary text-lg">
          We used these sketches as a guideline to base our digital wireframes'
          layout on.
        </p>
        <p className="font-secondary text-lg text-justify">
          We decided that showing the quantity of a pantry item left, along with
          a countdown to its expiration date would require at least two graphs
          side-by-side. <br></br> Additionally, clicking on a particular item
          should let the user fetch detailed information about it, along with
          edit/delete options.
        </p>
        <div className="  my-4 rounded-md text-center  flex justify-around">
          <Image
            src={proto1}
            alt="prototype 1"
            className="mx-auto w-1/4"
          ></Image>
          <Image
            src={proto2}
            alt="prototype 2"
            className="mx-auto w-1/4"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Flow 1: Pantry Health
        </p>
        <div className="  my-4 rounded-md text-center ">
          <Image
            src={proto3}
            alt="prototype 3"
            className="mx-auto w-4/5"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Flow 2: Receipt Scanning
        </p>
        <p className="font-secondary font-light text-lg text-justify">
          We decided that the application would have 3 menus:
        </p>
        <ul className="pl-8 list-disc text-lg font-secondary font-light text-justify">
          <li>
            The home tab would show the user pantry health and some quick recipe
            options
          </li>
          <li>
            The inventory tab would provide the user with alternative methods to
            update their pantry items, such as:
          </li>
        </ul>
        <p className="font-secondary font-light text-lg text-justify">
          Barcode Scanning
        </p>
        <div className="  my-4 rounded-md text-center  flex justify-around">
          <Image
            src={barcode1}
            alt="barcode 1"
            className="mx-auto w-1/4"
          ></Image>
          <Image
            src={barcode2}
            alt="barcode 2"
            className="mx-auto w-1/4"
          ></Image>
        </div>
        <p className="font-secondary font-light text-lg text-justify">
          and Item Recognition
        </p>
        <div className="  my-4 rounded-md text-center  flex justify-around">
          <Image
            src={itemRecog1}
            alt="item recognition 1"
            className="mx-auto w-1/4"
          ></Image>
          <Image
            src={itemRecog2}
            alt="item recognition 2"
            className="mx-auto w-1/4"
          ></Image>
        </div>
        <p className="font-secondary font-light text-lg text-justify">
          and finally, we also fleshed out the "Try a Recipe!" flow, providing
          the user the option to browse recipes based on their inventory, or
          just look up 'All Recipes.' As the name suggests, will allow the user
          to create, share and browse through user-recipes from the community.
        </p>
        <div className="  my-4 rounded-md text-center  flex justify-around">
          <Image
            src={recipe1}
            alt="recipe prototype 1"
            className="mx-auto w-1/4"
          ></Image>
          <Image
            src={recipe2}
            alt="recipe prototype 2"
            className="mx-auto w-1/4"
          ></Image>
          <Image
            src={recipe3}
            alt="recipe prototype 3"
            className="mx-auto w-1/4"
          ></Image>
        </div>
        <p className="font-secondary font-light text-lg text-justify">
          These lofi frames were then given a splash of color, which gave us the
          opportunity to experiment with some color palettes and help us see
          what works best, which resulted in the following prototype
        </p>
        {hasWindow && (
          <div className="py-2  my-4 rounded-md text-center  flex justify-around">
            <ReactPlayer
              url="https://vimeo.com/772048766"
              loop={true}
              playing={true}
              controls={true}
              className="mx-auto rounded-md"
            />
          </div>
        )}
        <h3 className="font-primary text-3xl mb-1 font-medium">
          Phase 3: Feedback and Revisions
        </h3>
        <h3 className="font-primary text-xl mb-1">
          Feedback on Initial Prototype
        </h3>
        <p className="font-secondary font-light text-lg text-justify">
          Upon subjecting the above-developed prototypes to peer evaluation, we
          received a tremendous amount of insight:
        </p>
        <ul className="list-decimal pl-8 pr-6 text-justify text-lg mt-1 font-secondary">
          <li className="font-semibold mt-2">
            Users were confused by too many colors and graph bars
          </li>
          <p className="font-light">
            The colors used for the different bar charts were found to be
            overwhelming to test users. They mentioned that they had to spend a
            considerable amount of time deciphering the pantry health
            visualization, which we realized was impeding the 'at a glance'
            philosophy and was making the initial learning curve steeper for the
            user.
          </p>
          <li className="font-semibold mt-4">
            Not sure what the 'store the following in' (a.k.a Storage Practices)
            page's function was
          </li>
          <p className="font-light">
            Several users were hesitant about what to do next when directly
            presented with the Storage Practices screen after they input their
            new pantry items.
          </p>
          <ul className="pl-8 list-disc text-lg font-secondary font-light">
            <li>
              The screen's original intention was to give the users a preview of
              what they'd entered, and to also give them storage recommendations
              for items.
            </li>
            <li>
              Users required an explanation in order to fully understand our
              intent, after which they found the feature to be useful.
            </li>
          </ul>
          <li className="font-semibold mt-4">
            Too many menus and options to explore
          </li>
          <p className="font-light">
            The home page, inventory and recipes tabs were a lot for users to
            take in all at once. It was also observed that users were unsure of
            the difference between the home tab and the inventory tab, since
            both of them displayed the pantry health visualization first,
            followed by different elements underneath that.
          </p>
        </ul>
        <h3 className="font-primary text-xl mb-1">Revisions</h3>
        <ul className="pl-8 list-disc text-lg font-secondary font-light text-justify">
          <li>
            To address the problem 1, we went through two iterations to reach a
            solution:
          </li>
          <ul className="pl-8 list-disc text-lg font-secondary font-light text-justify">
            <li>
              Initially, we tightened up the color palette to only use primary
              and secondary colors at most. Graph bar colors were switched out
              for more subtle and color blind-friendly alternatives.
            </li>
            <div className="py-4 px-4 my-4 rounded-md text-center ">
              <Image
                src={revision1}
                alt="revision 1"
                className="mx-auto w-1/2 my-4"
              ></Image>
              <Image
                src={revision2}
                alt="revision 2"
                className="mx-auto w-1/2 my-4"
              ></Image>
            </div>
            <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
              Revision 1: Home Screen and Pantry Health Visualization
            </p>
            <li>
              The second iteration led us to remove the{" "}
              <span className="italic">'days left'</span> graph bar altogether,
              instead substituting it with a textual{" "}
              <span className="italic">'stocked x days ago'</span> element on
              top of a single graph, whose sole purpose was to depict the item
              quantity. This helped us solve the problem of having to figure out
              expiration dates and periods, and leave it up to the user's
              judgment, and made our visualization more intuitive.
            </li>
            <div className="py-4 px-4 my-4 rounded-md text-center ">
              <Image
                src={revision3}
                alt="revision 3"
                className="mx-auto w-1/2 my-4"
              ></Image>
              <Image
                src={revision4}
                alt="revision 4"
                className="mx-auto w-1/2 my-4"
              ></Image>
            </div>
            <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
              Revision 2: Home Screen and Pantry Health Visualization
            </p>
          </ul>
          <li>
            We then addressed the user flow confusion that arose from the
            Storage Practices page, by adding an additional window specifically
            for users to review their item entries and make edits, following
            which we took them to the recommended storage methods window. This
            seemed to clear up any ambiguity experienced by users during tests
            after the change.
          </li>
          <div className="  my-4 rounded-md text-center ">
            <Image
              src={revision5}
              alt="revision 5"
              className="mx-auto h-2/4 w-auto"
            ></Image>
          </div>
        </ul>
        <h3 className="font-primary text-3xl mb-1 font-medium">
          Final Prototype
        </h3>
        <p className="font-secondary font-light text-lg text-justify mb-2">
          After incorporating everything discussed above into our redesign, we
          were ready with our final prototype.
        </p>
        <Link
          href="https://www.figma.com/proto/HUxf0bhkT3OOsViPuXPg1J/SI-582%3A-Forgetful-Foodie?type=design&node-id=136-227&t=eXB63GMsipzQalAM-0&scaling=scale-down&page-id=133%3A21&starting-point-node-id=136%3A474"
          className="font-primary text-base border border-black rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out"
          target="_blank"
          alt="Link to prototype"
        >
          Link to Prototype
        </Link>
        {hasWindow && (
          <div className="py-2  my-4 rounded-md text-center  flex justify-around">
            <ReactPlayer
              url="https://vimeo.com/851012658"
              loop={true}
              playing={true}
              controls={true}
              className="mx-auto rounded-md"
            />
          </div>
        )}
        <h3 className="font-primary text-xl mb-1">Future Scope</h3>
        <p className="font-secondary font-light text-lg text-justify mb-1.5">
          If we get the opportunity to further develop this prototype, we would
          love to focus more on the specifics of recipe submission and curation,
          and any new features that could improve the user's experience in that
          sphere.
        </p>
        <h3 className="font-primary text-xl mb-1">Reflections</h3>
        <p className="font-secondary font-light text-lg text-justify mb-1.5">
          This is one of my first complete Interaction Design projects, and
          thanks to the course structure, we were able to delve into the entire
          process week-by-week, and understand the importance of iterative
          design based on feedback. The one learning lesson I took from this
          project was to inculcate a habit of documenting my activities as and
          when they occur, which would have helped me compile this study quicker
          and extract deeper insights overall.
        </p>
        <div className="flex justify-center py-4">
          <button
            className={`${
              isVisible ? "visible fixed bottom-5 right-8" : "invisible"
            } font-primary text-base border shadow-md border-black rounded-sm px-3 py-2 hover:bg-black bg-white hover:text-white ease-in-out mx-auto`}
            alt="Back to top"
            onClick={scrollToTop}
          >
            <BsArrowUp size={24}/>
          </button>
        </div>
      </Wrapper>
    </>
  );
}
