import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicle } from "../store/actions";
import { getCurrentVehicle } from "../store/selectors";

import { stateTypes } from "../types";

export default function useIndex() {
  const selectedTempVehicleId = useSelector(
    (state: stateTypes) => state.selectedTempVehicleId
  );
  const vehicleId = useSelector(getCurrentVehicle)._id;
  const dispatch = useDispatch<any>();

  const accessGranted = selectedTempVehicleId !== "" && vehicleId === "";

  useEffect(() => {
    if (!accessGranted) return;

    console.log("fetching vehicle");
    dispatch(
      fetchVehicle({
        _id: selectedTempVehicleId,
      })
    );
  }, [accessGranted, selectedTempVehicleId, dispatch]);
}
