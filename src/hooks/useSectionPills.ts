import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postOrder, setSnackBar } from "../store/actions";
import { getCurrentVehicle } from "../store/selectors";
import { stateTypes } from "../types";

export default function useSectionPills() {
  const errors = useSelector((state: stateTypes) => state.errors);
  const isLoggedIn = useSelector((state: stateTypes) => state.auth.isLoggedIn);
  const vehicleDetails = useSelector(getCurrentVehicle);
  const additionalDetails = useSelector((state: stateTypes) => state.formFields);
  const dispatch = useDispatch<any>();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

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

  const placeOrder = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    dispatch(postOrder({
      vehicleDetails,
      additionalDetails,
      Then: () => setIsOrderPlaced(true)
    }))
};

  const proceedToOrder = () => {
    if (activeTabIndex === 0) {
      if (Object.values(errors).some((err) => err)) {
        dispatch(setSnackBar("Kindly fill all the fields!"));
        return;
      }
    } else if (activeTabIndex === 1) {
      if (additionalDetails.location.isDefault) {
        dispatch(setSnackBar("Kindly let us know your pickup location!"));
        return;
      }
    }

    const newIndex = activeTabIndex + 1
    if (newIndex === 4){
      placeOrder()
    }else {
      setActiveTabIndex(newIndex);
    }
  };

  return {
    containerHeight,
    activeTabIndex,

    containerRef,
    isOrderPlaced,
    showLoginModal,
    setShowLoginModal,
    proceedToOrder,
    setActiveTabIndex,
  };
}
