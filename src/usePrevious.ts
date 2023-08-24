import { number } from "prop-types";
import { useRef, useEffect } from "react";

export default function usePrevious(value: number) {
  const ref = useRef<null | number>(null);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
