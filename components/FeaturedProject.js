import Image from "next/image";
import placeholder from "../public/placeholder.png";
import Link from "next/link";

export default function FeaturedProject(props) {
  return (
    <div
      className={`py-4 ${
        props.flow === "right" ? "flex-row-reverse" : ""
      } flex justify-between items-center bg-transparent w-full mt-4 mb-8 min-h-[50vh]`}
    >
      <div
        className={`w-[48%] ${
          props.flow === "right" ? "border-l" : "border-r"
        } py-6 h-full`}
      >
        <div className={`w-4/5 ${props.flow==="right"? 'float-right':''}`}>
          <p className="font-primary text-5xl mb-2">{props.title}</p>
          <div className="font-secondary text-lg mb-2">
            {props.domains.slice(1).map((domain, i) => {
              return i !== props.domains.length - 2 ? (
                <span key={i}>{domain}, </span>
              ) : (
                <span key={i}>{domain}</span>
              );
            })}
          </div>
            <Link href={`/projects/${props.id}`}>
            <button className="font-primary text-base border rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out">
            View
          </button>
            </Link>
        </div>
      </div>
      <Image src={placeholder} alt="placeholder" className="w-5/12" />
    </div>
  );
}
