import { useState, useEffect } from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import "./ScrollToTop.css";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight / 3) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-top-btn ${showButton ? "show-scroll-btn" : ""}`}
      onClick={handleClick}
      title="Go to top"
    >
      <RiArrowUpDoubleFill />
    </button>
  );
};

export default ScrollToTop;