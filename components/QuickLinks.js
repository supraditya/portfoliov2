/**
 * Wrapper.js dynamically adds refs to all elements in the project page that are <h3> OR <h4>
 * adding 'subheader' to the classlist of these elements will make their quicklinks smaller than the other headers
 */

import { useState } from "react";

const QuickLinks = ({ quickLinks, onLinkClick }) => {
  const [clickedLink, setClickedLink] = useState(-1);
  return (
    <div className="w-44 fixed md:mr-24 max-lg:hidden right-0">
      <p className="font-primary text-lg font-semibold text-right mr-4 pb-2">
        Quick Links
      </p>
      <ul className="list-none h-[20rem] overflow-y-scroll">
        {quickLinks.map((link, index) => {
          if (link.name !== "") {
            return (
              <li
                key={index}
                className={`font-secondary ${
                  link.headerType === "subheader"
                    ? "text-sm font-normal py-1"
                    : "text-base font-semibold pt-2"
                } pr-4 border-r-2  text-right mr-4 cursor-pointer ${
                  clickedLink === index ? "border-black font-bold" : ""
                }`}
                onClick={() => {
                  onLinkClick(link.yOffset - 120);
                  setClickedLink(index);
                }}
              >
                {link.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default QuickLinks;
