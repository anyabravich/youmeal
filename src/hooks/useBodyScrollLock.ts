import { useEffect, RefObject } from "react";

export const useBodyScrollLock = (
  ref: RefObject<HTMLElement | null>,
  active: boolean
) => {
  useEffect(() => {
    if (!active || !ref.current) return;

    const scrollY = window.scrollY;
    const body = document.body;

    const previousStyle = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      overflow: body.style.overflow,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      Object.assign(body.style, previousStyle);

      window.scrollTo(0, scrollY);
    };
  }, [ref, active]);
};
