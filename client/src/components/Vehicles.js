"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const store_1 = require("../store");
const actions_1 = require("../store/actions");
const selectors_1 = require("../store/selectors");
const SingleVehicleOption_1 = __importDefault(require("./SingleVehicleOption"));
function Vehicles({ companyId, setShowVehiclesFalse }) {
    const getMemoizedTempVehicles = (0, react_1.useMemo)(selectors_1.getTempVehicles, [companyId]);
    const { vehicles } = (0, react_redux_1.useSelector)((state) => getMemoizedTempVehicles(state, companyId));
    const [loading, setLoading] = (0, react_1.useState)(false);
    const dispatch = (0, react_redux_1.useDispatch)();
    const condition = vehicles.length > 0;
    (0, react_1.useEffect)(() => {
        if (condition)
            return;
        const cityParam = store_1.store.getState().currentCity;
        let mounted = true;
        if (!mounted)
            return;
        setLoading(true);
        dispatch((0, actions_1.fetchTempVehicles)({
            countryParam: "USA",
            cityParam,
            companyId,
            InvalidRequest: () => setLoading(false),
            Then: () => setLoading(false),
            Catch: () => setLoading(false),
        }));
        return () => {
            setLoading(false);
            mounted = false;
        };
        // eslint-disable-next-line
    }, [dispatch, condition]);
    const onSelect = (id) => {
        dispatch((0, actions_1.setSelectedVehicleId)(id));
        setShowVehiclesFalse();
    };
    return (<StyledContainerDiv>
      {condition
            ? vehicles.map((car, index) => (<SingleVehicleOption_1.default key={index} car={car} onSelect={onSelect}/>))
            : loading && (<StyledProgressDiv>
              <material_1.CircularProgress color="primary"/>
            </StyledProgressDiv>)}
    </StyledContainerDiv>);
}
exports.default = Vehicles;
const StyledContainerDiv = (0, styles_1.styled)("div")({
    width: "100%",
    backgroundColor: "white",
});
const StyledProgressDiv = (0, styles_1.styled)("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
});
