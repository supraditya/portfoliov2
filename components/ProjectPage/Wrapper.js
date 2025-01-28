import React from "react";
import { useState, useEffect, useRef } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { BsArrowUp } from "react-icons/bs";
import QuickLinks from "../QuickLinks";

export default function Wrapper({ children, headers }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      // Returns true if the window is scrolled, else returns false
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const [quickLinks, setQuickLinks] = useState([]);
  const headerRefs = useRef([]); // Store refs for headers

  useEffect(() => {
    // Calculate header offsets dynamically
    if (headerRefs.current.length > 0) {
      const offsets = headerRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return { name: ref.textContent, yOffset: rect.top + window.scrollY };
        }
        return null;
      });
      setQuickLinks(offsets.filter(Boolean)); // Remove null values
    }
  }, [children]); // Recalculate whenever children change

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  const scrollToSection = (yOffset) => {
    window.scrollTo({
      top: yOffset,
      behavior: "smooth",
    });
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        // Only clone and add ref if it's an h3 element
        if (child.type === "h3") {
          return React.cloneElement(child, {
            ref: (el) => (headerRefs.current[index] = el),
          });
        }
      }
      // Return the original child for everything else
      return child;
    });
  };

  return (
    <div className="relative">
      <Navbar />
      <QuickLinks quickLinks={quickLinks} onLinkClick={scrollToSection} />
      <div className="px-10 md:px-32 lg:px-72 xl:px-80 leading-snug">
        {renderChildren()}
      </div>
      <div className="flex justify-center py-4">
        <button
          className={`${
            isVisible ? "visible fixed bottom-5 right-8" : "invisible"
          } font-primary text-base border shadow-md hover:border-white border-black rounded-sm px-3 py-2 hover:bg-black bg-white hover:text-white ease-in-out mx-auto`}
          alt="Back to top"
          onClick={scrollToTop}
        >
          <BsArrowUp size={24} />
        </button>
      </div>
      <Footer />
    </div>
  );
}
