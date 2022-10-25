"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/actions");
const selectors_1 = require("../store/selectors");
function useIndex() {
    const selectedTempVehicleId = (0, react_redux_1.useSelector)((state) => state.selectedTempVehicleId);
    const vehicleId = (0, react_redux_1.useSelector)(selectors_1.getCurrentVehicle)._id;
    const dispatch = (0, react_redux_1.useDispatch)();
    const accessGranted = selectedTempVehicleId !== "" && vehicleId === "";
    (0, react_1.useEffect)(() => {
        if (!accessGranted)
            return;
        console.log("fetching vehicle");
        dispatch((0, actions_1.fetchVehicle)({
            _id: selectedTempVehicleId,
        }));
    }, [accessGranted, selectedTempVehicleId, dispatch]);
}
exports.default = useIndex;
