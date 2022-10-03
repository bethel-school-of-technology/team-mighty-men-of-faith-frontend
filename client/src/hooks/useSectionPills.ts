import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSnackBar } from "../store/actions";
import { stateTypes } from "../types";

export default function useSectionPills() {
  const errors = useSelector((state: stateTypes) => state.errors);
  const location = useSelector(
    (state: stateTypes) => state.formFields.location
  );

  const dispatch = useDispatch();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
    function resizeTab() {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight);
      }
    }

    window.addEventListener("resize", resizeTab);

    return () => window.removeEventListener("resize", resizeTab);
  }, []);

  const proceedToOrder = () => {
    if (activeTabIndex === 0) {
      if (Object.values(errors).some((err) => err)) {
        dispatch(setSnackBar("Kindly fill all the fields!"));
        return;
      }
    } else if (activeTabIndex === 1) {
      if (location.isDefault) {
        dispatch(setSnackBar("Kindly let us know your pickup location!"));
        return;
      }
    }

    setActiveTabIndex(activeTabIndex + 1);
  };

  return {
    containerHeight,
    activeTabIndex,

    containerRef,

    proceedToOrder,
    setActiveTabIndex,
  };
}
