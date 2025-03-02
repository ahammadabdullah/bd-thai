"use client";

import React from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  href,
  children,
}) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -100;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleSmoothScroll}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
