import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (!hash) return;

    const id = hash.replace("#", "");

    let attempts = 0;

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(scrollToElement, 100); // Try again after delay
      }
    };

    // Delay to allow routing/rendering to complete
    setTimeout(scrollToElement, 100);

  }, [location]);

  return null;
};

export default ScrollToHash;
