import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicle } from "../store/actions";
import { getCurrentVehicle } from "../store/selectors";
import { setAllParas } from "../store/actions";

import { generalParasStateType, stateTypes } from "../types";

interface schema{
  paras: generalParasStateType
}
export default function useEffectGetVehicle({paras}:schema) {
  const selectedTempVehicleId = useSelector(
    (state: stateTypes) => state.selectedTempVehicleId
  );
  const vehicleId = useSelector(getCurrentVehicle).id;
  const dispatch = useDispatch<any>();

  //   console.log(vehicle);

  const accessGranted = selectedTempVehicleId > 0 && vehicleId === 0;


  useEffect(() => {
    if (!accessGranted) return;

    console.log("fetching vehicle");
    dispatch(fetchVehicle({
      id: selectedTempVehicleId,
    }));
  }, [accessGranted, selectedTempVehicleId, dispatch]);





  useEffect(() => {
    dispatch(setAllParas(paras));
  }, [dispatch, paras]);

}
