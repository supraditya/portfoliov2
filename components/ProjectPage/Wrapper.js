import { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { BsArrowUp } from "react-icons/bs";

export default function Wrapper({ children }) {
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

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <>
      <Navbar />
      <div className="px-10 md:px-32 lg:px-72 leading-snug">{children}</div>
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
    </>
  );
}
