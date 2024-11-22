import Image from "next/image";
import me from "../public/me.jpg";
import { useState, useEffect } from "react";

const FigmaCommentDialog = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExpanded((prev) => !prev); // Toggle visibility after 1 second
    }, 2200);

    return () => clearTimeout(timeout); // Cleanup to avoid memory leaks
  }, []); // Re-run effect whenever isVisible changes

  return (
    <div
      style={{ animationDelay: "2s" }}
      className={`transition-all duration-500 bg-[#2C2C2C] p-1 md:animate-comment-expand-bubble max-md:animate-comment-expand-bubble-mobile flex text-white rounded-t-3xl max-w-1/2 rounded-bl-sm rounded-br-3xl shadow-xl`}
    >
      <Image
        src={me}
        style={{ animationDelay: "2s" }}
        className="rounded-full h-10 w-10 animate-comment-expand-image"
        alt="AM"
      ></Image>

      <div
        style={{ animationDelay: "2s", whiteSpace: 'nowrap' }}
        className={`transition-all duration-500 ${
          isExpanded ? "block" : "hidden"
        } overflow-hidden`}
      >
        <p className="text-white font-medium">
          Aditya Menon&nbsp; <span className="text-[#A0A0A0]">just now</span>
        </p>
        {props.children}
      </div>
    </div>
  );
};

export default FigmaCommentDialog;
