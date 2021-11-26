import debounce from "lodash.debounce";
import { useEffect, useMemo, useRef } from "react";

export const useDebouncedCallback = (
  callback: (...args: any[]) => any,
  wait = 500,
  runOnMount = false
) => {
  if (typeof wait !== "number" || wait < 0)
    throw new Error("`wait` must be a number >= 0");

  const debouncedCallback = useMemo(
    () => debounce(callback, wait),
    [callback, wait]
  );

  const ref = useRef(!runOnMount);

  useEffect(() => {
    if (!ref.current) debouncedCallback();
    ref.current = false;
    return () => {
      debouncedCallback.cancel();
    };
  }, [debouncedCallback]);
};
