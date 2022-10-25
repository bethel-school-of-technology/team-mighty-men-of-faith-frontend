"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const SwipeableForm_1 = __importDefault(require("./SwipeableForm"));
const SwipeableTabs = ({ tabs, activeTabIndex = 0 }) => {
    return (<div>
      <StyledTabs value={activeTabIndex} variant={"fullWidth"}>
        {tabs.map(({ TabIcon, title }, index) => (<StyledTab key={index} disableRipple label={title} icon={<TabIcon fontSize={"large"}/>}/>))}
      </StyledTabs>
      <SwipeableForm_1.default activeTabIndex={activeTabIndex} tabs={tabs}/>
    </div>);
};
exports.default = (0, react_1.memo)(SwipeableTabs);
const StyledTabs = (0, styles_1.styled)(material_1.Tabs)({
    margin: "20px 0",
});
const StyledTab = (0, styles_1.styled)(material_1.Tab)({
    height: 100,
});
