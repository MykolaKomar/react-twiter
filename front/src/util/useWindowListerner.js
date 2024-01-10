import { useEffect } from "react";

export function useWindowListerner(eventType, listerner) {
  useEffect(() => {
    window.addEventListener(eventType, listerner);
    return () => {
      window.removeEventListener(eventType, listerner);
    };
  }, [eventType, listerner]);
}
