import { useSelector } from "react-redux";
import { getCurrentVehicle } from "../store/selectors/index";
import { stateTypes } from "../types/index";

export default function useFormFooter() {
  const {
    driverRentPerDay,
    vehicleRentPerDay,
    insuranceRentPerDay,
    vehicleRentPerMonth,
    driverRentPerMonth,
    insuranceRentPerMonth,

  } = useSelector(getCurrentVehicle);
  const { addDriver, addInsurance, chargeByDay, startDate, endDate } =
    useSelector((state: stateTypes) => state.formFields);

  const getPrice = (): number => {
    let price = 0;
    const totalDays = diffDays || 1;

    if (addDriver) {
      price += chargeByDay
        ? driverRentPerDay * totalDays
        : driverRentPerMonth * months || driverRentPerDay * (months * 30);
    }
    if (addInsurance) {
      price += chargeByDay
        ? insuranceRentPerDay * totalDays
        : insuranceRentPerMonth * months || insuranceRentPerDay * (months * 30);
    }

    price += chargeByDay
      ? vehicleRentPerDay * totalDays
      : vehicleRentPerMonth * months || vehicleRentPerDay * (months * 30);

    return price;
  };

  const diffDate = Math.abs(endDate.valueOf() - startDate.valueOf());
  const diffDays = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  return { months, getPrice, chargeByDay, diffDays };
}
