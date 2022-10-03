import { useState, useEffect, useMemo, useRef } from "react";

import { GET_PARAMS } from "../constants";
import useGetParameter from "./useGetParameter";

export default function useGetPopupState() {
  const popupName = useGetParameter(GET_PARAMS.popup);

  const [mountedPopup, setMountedPopup] = useState<string | null>(popupName);

  const timeout = useRef<any>(null);
  useEffect(() => {
    if (popupName) {
      timeout.current && clearTimeout(timeout.current);
      setMountedPopup(popupName);
    } else {
      timeout.current = setTimeout(() => {
        setMountedPopup(null);
      }, 300);
    }
  }, [popupName]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout.current);
    };
  }, []);

  const isOpen = useMemo(() => Boolean(popupName), [popupName]);

  return {
    mountedPopup,
    isOpen,
  };
}
