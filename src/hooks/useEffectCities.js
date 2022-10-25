"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const react_redux_2 = require("react-redux");
const react_1 = require("react");
const actions_1 = require("../store/actions");
function useEffectCities({ setLoading }) {
    const dispatch = (0, react_redux_2.useDispatch)();
    const cities = (0, react_redux_1.useSelector)((state) => state.whiteListCities);
    const condition = Boolean(cities.length);
    (0, react_1.useEffect)(() => {
        if (condition)
            return;
        setLoading?.(true);
        dispatch((0, actions_1.fetchWhiteListCities)({
            Then: () => setLoading?.(false),
            Catch: () => setLoading?.(false),
        }));
        return () => setLoading?.(false);
    }, [condition, dispatch, setLoading]);
}
exports.default = useEffectCities;
