import { useState, useEffect } from "react";

export default function useUp() {
  const [buttonDisplay, setButtonDisplay] = useState( false );

  const hasScrolledEnough = () => {// 75% of the height of the window
    const percentage = 0.75;
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight * percentage;

    return scrollPosition >= threshold;
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (hasScrolledEnough()) {
        setButtonDisplay( true );
      } else {
        setButtonDisplay( false );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    buttonDisplay,
    scrollUp
  };
}
