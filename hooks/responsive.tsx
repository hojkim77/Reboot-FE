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
  const [intersecting, setIntersecting] = useState<boolean | null>(null);
  // if (serverSide) {
  //   return false;
  // }

  //? 관할하는 도구
  const observer = useMemo(
    () =>
      serverSide
        ? null
        : new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
          ),
    []
  );

  useEffect(() => {
    if (ref.current) {
      //* 관찰하는 도구로 ref.current를 보겠다.
      observer?.observe(ref.current);
    }

    return () => {
      observer?.disconnect();
    };
  });

  return intersecting;
};
