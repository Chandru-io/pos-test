import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function useOutSideClick() {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClicked = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClicked, true);

    return () => document.removeEventListener("click", handleClicked, true);
  }, []);

  return [isVisible, setIsVisible, ref];
}
