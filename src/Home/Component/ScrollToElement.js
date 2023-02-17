import React, { useEffect } from 'react';

function ScrollToLink({ id, children }) {
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={`#${id}`} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ScrollToLink;
