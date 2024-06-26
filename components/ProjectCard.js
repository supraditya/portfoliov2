import ListRenderer from "./ListRenderer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard(props) {
  const [hover, setHover] = useState(false);
  return (
      <Link
        href={`projects/${props.link}`}
        alt="Link to project"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`min-w-sm min-h-[400px] flex flex-col justify-between rounded-md shadow-xl p-4 w-full md:max-w-lg mt-4 ${
          props.domains.includes(props.currentTab) ? "" : "hidden"
        }`}
      >
        <Image
          src={require(`../public/assets/${props.image}/${props.image}.png`)}
          alt="project image"
          className="md:w-fit rounded-sm m-auto"
        />
        <div className="flex justify-between items-center">
          <div className="rounded-sm mr-2">
            <p className="font-primary font-semibold text-xl">{props.title}</p>
            <div className="font-secondary text-base">
              <ListRenderer list={props.domains} removeEnds={true} />
            </div>
          </div>
          <button
            aria-label="View project"
            className={`font-primary text-base border border-black rounded-sm px-3 py-2 ${
              hover ? "bg-black text-white" : ""
            } ease-in-out`}
          >
            View
          </button>
        </div>
      </Link>
  );
}
