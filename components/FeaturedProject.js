import Image from "next/image";
import Link from "next/link";
import ListRenderer from "./ListRenderer";
import { useState } from "react";

export default function FeaturedProject(props) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={`projects/${props.link}`}
      alt="Link to project"
    >
      <div
        className={`py-4 ${
          props.flow === "right" ? "md:flex-row-reverse" : ""
        } flex max-md:flex-col-reverse justify-between md:items-center bg-transparent w-full md:mt-4 md:mb-8 min-h-[50vh]`}
      >
        <div
          className={`md:w-[48%] border-black ${
            props.flow === "right" ? "md:border-l" : "md:border-r"
          } py-6 h-full`}
        >
          <div
            className={`md:w-4/5 ${
              props.flow === "right" ? "md:float-right" : ""
            }`}
          >
            <p className="font-primary font-light text-2xl md:text-5xl mb-0.5 md:mb-2">
              {props.title}
            </p>
            <div className="font-secondary font-medium text-lg md:text-xl">
              <ListRenderer list={props.domains} removeEnds={true} />
            </div>
            <div className="font-secondary font-light text-md mb-2 text-subtitleGray">
              {props.description}
            </div>
            <button
              aria-label="View Project"
              className={`font-primary text-base border border-black rounded-sm px-3 py-2 ${hover ? 'bg-black text-white':''} ease-in-out`}
            >
              View
            </button>
          </div>
        </div>
        <Image
          src={require(`../public/assets/${props.image}/${props.image}.png`)}
          alt="project image"
          className="md:w-5/12"
        />
      </div>
    </Link>
  );
}
