import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
// import fontncolor from "../../public/assets/cryptogods-anubis/font-and-colors.png";
import projectImg from "../../public/assets/auto-ux/auto-ux.png";
import Highlights from "../../components/ProjectPage/Highlights";
import ActionButton from "../../components/ActionButton";
import { BsGlobe2 } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import problem from "../../public/assets/auto-ux/problem.png";
import dogmode from "../../public/assets/auto-ux/dog-mode.png";
import teslaDogMode from "../../public/assets/auto-ux/tesla-dog-mode.gif";
import rivianDogMode from "../../public/assets/auto-ux/rivian-dog-mode.gif";
import ourDogMode from "../../public/assets/auto-ux/our-dog-mode.png";
import ourDogModePrototype from "../../public/assets/auto-ux/our-dog-mode-proto.gif";
import samaritan1 from "../../public/assets/auto-ux/samaritan-1.png";
import samaritan2 from "../../public/assets/auto-ux/samaritan-2.png";
import samaritan3 from "../../public/assets/auto-ux/samaritan-3.png";
import batteryLow from "../../public/assets/auto-ux/battery-low.png";
import regenBraking from "../../public/assets/auto-ux/regen-braking.gif";

import Head from "next/head";
export default function AutoUX() {
  return (
    <>
      <Head>
        <title>Auto UX - General Motors | Projects</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Wrapper>
        <Header
          title="Auto UX Concept for General Motors"
          subtitle="Making mass-market Electric Vehicles (EVs) more approachable through intuitive animations, considerate interactions and a reimagined 'Dog Mode'"
        />
        <ActionButton
          link="https://www.figma.com/proto/MoK7Ok835HMGgh4oLpoNij/Assignment-5?node-id=850-28691&t=UVcBJU92274ILtxu-1&scaling=min-zoom&page-id=456%3A12040&starting-point-node-id=850%3A28691&show-proto-sidebar=1https://www.figma.com/proto/MoK7Ok835HMGgh4oLpoNij/Assignment-5?node-id=850-28691&t=aMcCr6j5mzCRwQmp-0&scaling=scale-down&page-id=456%3A12040&starting-point-node-id=850%3A28691&show-proto-sidebar=1"
          icon={<FaFigma />}
          label="Prototype"
        />
        <ActionButton
          link="https://1drv.ms/p/s!As2iKv3c-O0Y4X_r0Uyco4NHN1eg?e=JVzTBr"
          icon={<BsGlobe2 />}
          label="Presentation"
        />
        <div className="py-4 my-2 md:my-4 rounded-md text-center flex flex-col max-md:items-center md:flex-row justify-around">
          <Image
            src={projectImg}
            alt="auto ux header"
            className="w-11/12 mt-5"
          ></Image>
          {/* <Image
            src={fontncolor}
            alt="font and colors used"
            className="w-4/5 md:w-1/3 object-contain mt-5"
          ></Image> */}
        </div>
        <Highlights
          summary="General Motors approached our cohort with a problem statement for each of their 3 vehicle segments: Mass-Market, Performance and Luxury. We picked the first one, met the stated requirements and then added a few ideas of our own, including intuitive gestures, visualizations to better convey EV-specific concepts, reimagined space-efficient climate controls and a twist on the traditional Dog/Pet Mode. We used advanced Figma prototyping techniques including component variants, variables and conditional flows."
          roles={["Interaction Designer", "Graphic Designer", "UX Designer"]}
          team={["Vivek Selvaraj"]}
          timeline="Feb 2024 - Apr 2022"
          tools={["Figma"]}
        />
        <h3 className="font-primary text-3xl mb-1 font-medium">The Problem</h3>
        <p className="font-secondary text-lg font-light text-justify">
          GM's main ask was:
        </p>
        <p className="font-secondary text-xl text-yellow-600 font-base px-10 md:px-20 py-4 text-center italic">
          “After a vehicle is purchased, how can we add value to the user with a
          new feature?”
        </p>
        <div className="w-11/12 mx-auto my-4 rounded-md text-center">
          <Image
            src={problem}
            alt="problem statement slide"
            className="mx-auto"
          ></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          Problem Statement for Mass-Market Vehicle Segment. Courtesy: General
          Motors
        </p>
        <p className="font-secondary text-lg font-light text-justify">
          So we brainstormed several ideas, researched the competition,
          solutions devised by tech giants such as Apple and Google, and GM
          themselves, and came up with the ideas depicted below.
        </p>
        <h3 className="font-primary text-3xl mb-3 font-medium">Our Ideas</h3>
        <h3 className="font-secondary text-2xl mb-1 font-semibold">1. Dog Mode</h3>
        <h3 className="font-secondary text-lg mb-1 font-medium">
          Wait, what even <i>is</i> 'Dog Mode'?
        </h3>
        <p className="font-secondary text-lg font-light text-justify">
          Initially introduced by Tesla inspired by an X (Twitter) user's
          suggestion that they have a way to briefly leave their pets safely and
          comfortably in a car, Dog Mode essentially does the following:
        </p>
        <div className="w-11/12 mx-auto my-4 rounded-md text-center">
          <Image src={dogmode} alt="dog mode slide" className="mx-auto"></Image>
        </div>
        <p className="font-secondary font-light text-md text-center italic my-3 text-subtitleGray">
          What is Dog Mode? Courtesy: General Motors
        </p>
        <h3 className="font-secondary text-lg my-1 font-medium">Our Goals</h3>
        <p className="font-secondary text-lg font-light text-justify">
          Through Dog Mode, we intended to:
        </p>
        <ul className="list-disc font-secondary text-lg font-light pl-8 text-justify">
          <li>
            Allow users to be able to safely leave their pets inside vehicles
            for short periods of time
          </li>
          <li>
            Notify bystanders that the pet is safe within the car and the
            climate control is up and running.<br></br>This is also to prevent
            any well-intentioned rescue attempts that might result in damage or
            harm to the car, the pet or the bystander.
          </li>
        </ul>
        <h3 className="font-secondary text-lg my-1 font-medium">
          Competitive Analysis
        </h3>
        <p className="font-secondary text-lg font-light text-justify">
          Since this is a relatively new feature more commonly seen in Electric
          Vehicles, we drew inspiration from some of the biggest current names
          in North American EV manufacturers: Tesla and Rivian.
        </p>
        <div className="mt-2 font-secondary flex justify-between">
          <div className="w-1/2 pr-8">
            <h3 className="font-secondary text-lg my-1 font-medium">
              Tesla's Take
            </h3>
            <Image
              src={teslaDogMode}
              alt="tesla dog mode demo"
              className="h-80 w-auto"
            ></Image>
            <p className="font-secondary font-light text-md italic my-3 text-subtitleGray">
              Via Pinterest
            </p>
            <ul className="list-disc font-secondary text-md font-light pl-4 text-justify">
              <li>Simple, clear message for bystanders</li>
              <li>Shows current climate control temperature setting</li>
            </ul>
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="font-secondary text-lg my-1 font-medium">
              Rivian's Take
            </h3>
            <Image
              src={rivianDogMode}
              alt="rivian dog mode demo"
              className="h-80 w-auto"
            ></Image>
            <p className="font-secondary font-light text-md italic my-3 text-subtitleGray">
              Via Joshua Bravado Mascarenas on Youtube
            </p>
            <ul className="list-disc font-secondary text-md font-light pl-4 text-justify">
              <li>Dog mode is termed as 'Pet Mode', which is more inclusive</li>
              <li>
                The display shows both the temperature at which the climate
                control is set, and the actual in-cabin temperature.
              </li>
            </ul>
          </div>
        </div>
        <p className="font-secondary text-lg font-light text-justify my-4">
          After combining ideas and principles from these implementations (and
          adding an idea of our own) we came up our spin on the feature.
        </p>
        <Image
          src={ourDogModePrototype}
          alt="our dog mode demo"
          className="mx-auto w-[94%]"
        ></Image>
        <Image
          src={ourDogMode}
          alt="our dog mode demo"
          className="mx-auto"
        ></Image>
        <ul className="list-disc my-4 font-secondary text-lg font-light pl-8 text-justify">
          <li>
            In addition to the reassuring message, graphics and climate control
            information, we made sure to reflect the message on both the center
            display and instrument cluster so that the message is easily viewed
            from either side of the vehicle exterior.
          </li>
          <li>
            We also added a way for bystanders to have some degree of
            interaction through a QR code, which when scanned will open a web
            application that initiates what we call the{" "}
            <strong>'Samaritan Mode'</strong>
          </li>
        </ul>
        <h3 className="font-secondary text-xl my-1 font-medium">
          Introducing: Samaritan Mode
        </h3>
        <p className="font-secondary text-lg font-light text-justify">
          When a bystander thinks something needs the owner's immediate
          attention, they can scan the QR code displayed on the Pet Mode Screen
          and are redirected to a web application. They can either send an
          anonymous 'nudge', or a custom message with photos.
        </p>
        <Image
          src={samaritan1}
          alt="Samaritan view 1"
          className="mx-auto w-3/5"
        ></Image>
        <p className="font-secondary text-lg font-light text-justify">
          If they choose to send a custom message, they would have a text box
          and a 'take photos' button to send to the owner. The 'take photos'
          button ensures that only photos taken by the bystander through
          Samaritan Mode are sent through the portal. This allows for
          minimization of spam.
        </p>
        <Image
          src={samaritan2}
          alt="Samaritan view 2"
          className="mx-auto w-3/5"
        ></Image>
        <p className="font-secondary text-lg font-light text-justify">
          Once the Samaritan sends the message, the vehicle owner will receive a
          push notification from the companion smartphone app on their device.
        </p>
        <Image
          src={samaritan3}
          alt="Samaritan view 3"
          className="mx-auto w-3/5"
        ></Image>
        <h3 className="font-secondary text-lg my-1 font-medium">
          Edge Case: Vehicle battery low / battery has run out
        </h3>
        <p className="font-secondary text-lg font-light text-justify">
          Tesla considers a case where the owner enables Dog Mode but their
          car's battery goes below a threshold. They send a push notification to
          the owner's smartphone warning them of the vehicle's current battery
          level and reminding them to check on their pets. <br></br> We
          incorporated this and an additional case of the vehicle's battery
          completely running out, where the windows will be slightly opened
          prior to battery drain to provide for ventilation for any pets inside
          of the vehicle at the time.
        </p>
        <Image
          src={batteryLow}
          alt="Low vehicle battery notification"
          className="mx-auto w-3/5"
        ></Image>
        <h3 className="font-secondary text-2xl mb-1 font-semibold">
          2. Visualizing Regenerative Braking
        </h3>
        <p className="font-secondary text-lg font-light text-justify">
          The world is slowly, but surely adopting EVs over traditional Internal
          Combustion Engines (ICE) vehicles, but this shift is still in its
          infancy. As a result, there are several concepts and terminologies
          that owners transitioning from ICE to EVs aren't always familiar with.
          Some examples include measuring a vehicle's fuel capacity in
          Kilowatt-Hour instead of Gallons of fossil fuels, instant torque and a
          lack of a traditional engine as electricity from the battery is
          directly sent to individual motors that turn the vehicle's wheels, and
          regenerative braking. <br></br>
          We set our sights on the latter as we found it to be one of the most
          obtuse concepts to grasp for traditional drivers, and aimed to make it
          more visually intuitive through the vehicle's instrument cluster.
        </p>
        <h3 className="font-secondary text-lg my-1 font-medium">
          What is Regenerative Braking?
        </h3>
        <p className="font-secondary text-lg font-light text-justify">
          Ever notice in films that when cars come to a sudden stop, their brake
          pads are often depicted as red hot? This is because the brakes
          essentially apply friction to the wheels to slow them down and
          eventually stop them, which releases a lot of heat energy. But in case
          of EVs, electric motors attached to the wheel can be turned the other
          way to essentially recover some of the kinetic energy lost in the form
          of heat and be sent back to the vehicle battery to recharge it.
          <br></br> Simply put, braking can charge your vehicle battery.
        </p>
        <p className="font-secondary text-lg font-light my-1 text-justify">
          So how do we visualize such a complex idea without words on an
          instrument cluster?
        </p>
        <h3 className="font-secondary text-lg my-1 font-medium">
          Our Solution
        </h3>
        <p className="font-secondary text-lg font-light my-1 text-justify">
          We came up with a J-shaped gauge that aimed to illustrate the power
          that's being delivered from/to the vehicle by having the gauge run
          from -25% to 100% on the right hand side. The -25% section essentially
          depicts that there is a negative amount of power being delivered by
          the vehicle i.e it is receiving power. Finally, we have the vehicle's
          battery gauge with range information situated close to the regen
          section, and an animation that illustrates a direct relationship
          between braking and the vehicle's battery level increasing.
        </p>
        <p className="font-secondary text-lg font-light my-1 text-justify">
          This is what it would look like if someone applied brakes while
          driving our concept EV:
        </p>
        <Image
          src={regenBraking}
          alt="Regenerative Braking Visualization"
          className="mx-auto w-3/5 my-8"
        ></Image>
        <p className="font-secondary text-lg font-light my-1 text-justify">
          Through feedback from test users and GM experts, we were able to
          validate that this visualization was at least somewhat intuitive. We
          were also able to slightly gamify the process of regenerative braking,
          as there is a way to maximize the amount of energy recovered through
          gentle braking, which is an acquired skill.
        </p>
        <h3 className="font-secondary text-2xl mb-1 font-semibold">
          3. Drag Interaction-based Climate Controls
        </h3>
        {/* <iframe
          width="100%"
          height="600"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMoK7Ok835HMGgh4oLpoNij%2FAssignment-5%3Ftype%3Ddesign%26node-id%3D850-28691%26t%3DRbdWvlCFz3Zv6WvD-1%26scaling%3Dscale-down%26page-id%3D456%253A12040%26starting-point-node-id%3D850%253A28691%26mode%3Ddesign"
          allowFullScreen
        ></iframe> */}
      </Wrapper>
    </>
  );
}
