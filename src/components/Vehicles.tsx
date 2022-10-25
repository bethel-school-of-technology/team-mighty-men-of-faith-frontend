import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { fetchTempVehicles, setSelectedVehicleId } from "../store/actions";
import { getTempVehicles } from "../store/selectors";
import { stateTypes } from "../types";
import SingleVehicleOption from "./SingleVehicleOption";

interface schema {
  companyId: string;
  setShowVehiclesFalse: () => void;
}
export default function Vehicles({ companyId, setShowVehiclesFalse }: schema) {
  const getMemoizedTempVehicles = useMemo(getTempVehicles, [companyId]);

  const { vehicles } = useSelector((state: stateTypes) =>
    getMemoizedTempVehicles(state, companyId)
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();

  const condition = vehicles.length > 0;
  useEffect(() => {
    if (condition) return;
    const cityParam = store.getState().currentCity;

    let mounted = true;
    if (!mounted) return;
    setLoading(true);

    dispatch(
      fetchTempVehicles({
        countryParam: "USA",
        cityParam,
        companyId,
        InvalidRequest: () => setLoading(false),
        Then: () => setLoading(false),
        Catch: () => setLoading(false),
      })
    );

    return () => {
      setLoading(false);
      mounted = false;
    };

    // eslint-disable-next-line
  }, [dispatch, condition]);

  const onSelect = (id: string) => {
    dispatch(setSelectedVehicleId(id));
    setShowVehiclesFalse();
  };

  return (
    <StyledContainerDiv>
      {condition
        ? vehicles.map((car, index) => (
            <SingleVehicleOption key={index} car={car} onSelect={onSelect} />
          ))
        : loading && (
            <StyledProgressDiv>
              <CircularProgress color="primary" />
            </StyledProgressDiv>
          )}
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled("div")({
  width: "100%",
  backgroundColor: "white",
});

const StyledProgressDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: 20,
});
