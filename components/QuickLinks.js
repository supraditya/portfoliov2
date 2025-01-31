/**
 * Send quicklinks object from each page:
 * {Link name: yoffset} (look at scrollToTop in Wrapper.js)
 *
 * Define custom object for each page
 * useEffect inside calling project page on init to calculate each offset, then send it as prop in
 * the aforementioned object
 */

import { useState } from "react";

const QuickLinks = ({ quickLinks, onLinkClick }) => {
  const [clickedLink, setclickedLink] = useState(-1);
  console.log(quickLinks)
  return (
    <div className="w-44 fixed md:mr-24 max-lg:hidden right-0">
      <p className="font-primary text-lg font-semibold text-right mr-4 pb-2">Quick Links</p>
      <ul className="list-none h-[20rem] overflow-y-scroll">
        {quickLinks.map((link, index) => {
          if (link.name !== "") {
            return (
              <li
                key={index}
                className={`font-secondary ${link.headerType === "subheader" ? "text-sm font-normal":"text-base font-semibold"} pr-4 border-r-2 py-1 text-right mr-4 cursor-pointer ${
                  clickedLink === index ? "border-black font-semibold" : ""
                }`}
                onClick={() => {
                  onLinkClick(link.yOffset - 120);
                  setclickedLink(index);
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
