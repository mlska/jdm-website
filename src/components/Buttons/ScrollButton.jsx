import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const fromBottom = Math.abs(scrollHeight - clientHeight - scrolled);
    if (fromBottom < 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      className={`fixed right-4 transition-all duration-300 bottom-20 z-10 opacity-${
        visible ? '1' : '0'
      } cursor-pointer text-primary hover:scale-110`}
    >
      <FaArrowCircleUp
        onClick={scrollToTop}
        size="3rem"
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </div>
  );
};

export default ScrollButton;
