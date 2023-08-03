import { useMediaQuery } from "react-responsive";
import { RefObject, useState, useEffect, useMemo } from "react";
import serverSide from "@hooks/checkServerside";

export const useDesktopMediaQuery = () =>
  useMediaQuery({ query: "(min-width: 1024px)" });

export const useTabletMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 1023px)" });

export const useMobileMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 767px)" });

export const useOnScreen = (ref: RefObject<Element>) => {
  const [isIntersecting, setIntersecting] = useState<boolean | null>(null);
  // if (serverSide) {
  //   return false;
  // }

  const observer = useMemo(
    () =>
      serverSide
        ? null
        : new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
          ),
    [],
  );

  useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current);
    }

    return () => {
      observer?.disconnect();
    };
  });

  return isIntersecting;
};
