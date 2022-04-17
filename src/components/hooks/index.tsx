import { useRef, useEffect } from "react";

export function usePrevious(value: number) {
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    ref.current = value;
  });

  return ref.current;
}
