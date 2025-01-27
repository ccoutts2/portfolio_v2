"use client";
import { useState, useEffect } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width !== null && width <= 768;
  const isTablet = width !== null && width < 1024;
  const isDesktop = width !== null && width > 1024;

  return { isMobile, isTablet, isDesktop };
};
