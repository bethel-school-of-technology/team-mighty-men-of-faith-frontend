import { useSelector } from "react-redux";
import { stateTypes } from "../types/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWhiteListCities } from "../store/actions";

interface schema {
  setLoading?: (arg: boolean) => void;
}
export default function useEffectCities({ setLoading }: schema) {
  const dispatch = useDispatch<any>();
  const cities = useSelector((state: stateTypes) => state.whiteListCities);

  const condition = Boolean(cities.length);
  useEffect(() => {
    if (condition) return;
    setLoading?.(true)

    dispatch(
      fetchWhiteListCities({
        Then: () => setLoading?.(false),
        Catch: () => setLoading?.(false),
      })
    );

    return () => setLoading?.(false);

  }, [condition, dispatch, setLoading]);
}
