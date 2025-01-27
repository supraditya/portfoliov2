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
  return (
    <div className="w-44 fixed md:ml-32 mt-8">
      <p className="font-primary text-lg font-semibold pb-2">Quick Links</p>
      <ul className="list-none">
        {quickLinks.map((link, index) => {
          if (link.name !== "") {
            return (
              <li
                key={index}
                className={`font-secondary pl-4 border-l-2 py-1  cursor-pointer ${
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
