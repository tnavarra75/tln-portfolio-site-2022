import { useLayoutEffect } from "react";

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalTouchStyle = window.getComputedStyle(document.body).touchAction;

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.touchAction = originalTouchStyle;
    }
  }, [])
}