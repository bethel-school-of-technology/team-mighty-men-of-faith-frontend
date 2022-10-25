"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/actions");
const selectors_1 = require("../store/selectors");
function useSectionPills() {
    const errors = (0, react_redux_1.useSelector)((state) => state.errors);
    const isLoggedIn = (0, react_redux_1.useSelector)((state) => state.auth.isLoggedIn);
    const vehicleDetails = (0, react_redux_1.useSelector)(selectors_1.getCurrentVehicle);
    const additionalDetails = (0, react_redux_1.useSelector)((state) => state.formFields);
    const dispatch = (0, react_redux_1.useDispatch)();
    const [activeTabIndex, setActiveTabIndex] = (0, react_1.useState)(0);
    const [containerHeight, setContainerHeight] = (0, react_1.useState)(null);
    const [showLoginModal, setShowLoginModal] = (0, react_1.useState)(false);
    const [isOrderPlaced, setIsOrderPlaced] = (0, react_1.useState)(false);
    const containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
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
        dispatch((0, actions_1.postOrder)({
            vehicleDetails,
            additionalDetails,
            Then: () => setIsOrderPlaced(true)
        }));
    };
    const proceedToOrder = () => {
        if (activeTabIndex === 0) {
            if (Object.values(errors).some((err) => err)) {
                dispatch((0, actions_1.setSnackBar)("Kindly fill all the fields!"));
                return;
            }
        }
        else if (activeTabIndex === 1) {
            if (additionalDetails.location.isDefault) {
                dispatch((0, actions_1.setSnackBar)("Kindly let us know your pickup location!"));
                return;
            }
        }
        const newIndex = activeTabIndex + 1;
        if (newIndex === 4) {
            placeOrder();
        }
        else {
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
exports.default = useSectionPills;
