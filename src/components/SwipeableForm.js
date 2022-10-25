"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
function SwipeableForm({ activeTabIndex, tabs }) {
    return (<react_swipeable_views_1.default 
    // axis={"x"}
    index={activeTabIndex} onChangeIndex={() => null} disabled={true}>
      {tabs.map(({ TabContent }, key) => (<div key={key}>{TabContent}</div>))}
    </react_swipeable_views_1.default>);
}
exports.default = SwipeableForm;
