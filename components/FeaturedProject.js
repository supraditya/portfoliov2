import Image from "next/image";
import Link from "next/link";
import ListRenderer from "./ListRenderer";

export default function FeaturedProject(props) {
  return (
    <div
      className={`py-4 ${
        props.flow === "right" ? "flex-row-reverse" : ""
      } flex justify-between items-center bg-transparent w-full mt-4 mb-8 min-h-[50vh]`}
    >
      <div
        className={`w-[48%] border-black ${
          props.flow === "right" ? "border-l" : "border-r"
        } py-6 h-full`}
      >
        <div className={`w-4/5 ${props.flow === "right" ? "float-right" : ""}`}>
          <p className="font-primary text-5xl mb-2">{props.title}</p>
          <div className="font-secondary text-lg mb-2">
            <ListRenderer list={props.domains} removeFirst={true}/>
          </div>
          <Link href={`projects/${props.link}`} alt="Link to project">
            <button className="font-primary text-base border border-black rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out">
              View
            </button>
          </Link>
        </div>
      </div>
      <Image src={require(`../public/assets/${props.image}.png`)} alt="project image" className="w-5/12" />
    </div>
  );
}
