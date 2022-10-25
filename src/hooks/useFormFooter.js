"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const index_1 = require("../store/selectors/index");
const getPrice_1 = __importDefault(require("../utils/getPrice"));
function useFormFooter() {
    const { driverRentPerDay, vehicleRentPerDay, insuranceRentPerDay, vehicleRentPerMonth, driverRentPerMonth, insuranceRentPerMonth, } = (0, react_redux_1.useSelector)(index_1.getCurrentVehicle);
    const { addDriver, addInsurance, chargeByDay, startDate, endDate } = (0, react_redux_1.useSelector)((state) => state.formFields);
    const getPrice = () => {
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
        return (0, getPrice_1.default)(price);
    };
    const diffDate = Math.abs(endDate.valueOf() - startDate.valueOf());
    const diffDays = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());
    return { months, getPrice, chargeByDay, diffDays };
}
exports.default = useFormFooter;
