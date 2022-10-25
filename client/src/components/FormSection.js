"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icons_material_1 = require("@mui/icons-material");
const react_1 = __importDefault(require("react"));
const CheckOut_1 = __importDefault(require("./CheckOut"));
const FormContainer_1 = __importDefault(require("./FormContainer"));
const Location_1 = __importDefault(require("./Location"));
const SwipeableTabs_1 = __importDefault(require("./SwipeableTabs"));
const Receipt_1 = __importDefault(require("./Receipt"));
function FormSection({ activeTabIndex, containerHeight, containerRef, disableInitials, }) {
    return (<SwipeableTabs_1.default activeTabIndex={activeTabIndex} 
    // setActiveTab={setActiveTab}
    tabs={[
            {
                title: "Booking",
                TabIcon: icons_material_1.DirectionsCar,
                TabContent: (<FormContainer_1.default ref={containerRef} disableInitials={disableInitials}/>),
            },
            {
                title: "Location",
                TabIcon: icons_material_1.LocationOn,
                TabContent: activeTabIndex === 1 ? (<Location_1.default containerHeight={containerHeight}/>) : (<div />),
                // tabContent: <Location containerHeight={containerHeight} /> ,
            },
            {
                title: "Review Order",
                TabIcon: icons_material_1.Receipt,
                TabContent: activeTabIndex === 2 ? <Receipt_1.default /> : <div />,
            },
            {
                title: "Check Out",
                TabIcon: icons_material_1.CreditCard,
                TabContent: <CheckOut_1.default containerHeight={containerHeight}/>,
            },
        ]}/>);
}
exports.default = FormSection;
