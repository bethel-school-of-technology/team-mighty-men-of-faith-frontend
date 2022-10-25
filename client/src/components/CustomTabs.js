"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importStar(require("react"));
const themeConstants_1 = require("../theme/themeConstants");
const SwipeableForm_1 = __importDefault(require("./SwipeableForm"));
function CustomTabs({ tabs }) {
    const [activeTabIndex, setActiveTabIndex] = (0, react_1.useState)(1);
    const handleChange = (event, activeTabIndex) => {
        setActiveTabIndex(activeTabIndex);
    };
    return (<StyledStack alignItems="center" justifyContent="center">
      <material_1.Stack spacing={1} sx={{
            maxWidth: 600,
        }}>
        <material_1.Card elevation={5}>
          <material_1.Tabs value={activeTabIndex} onChange={handleChange}>
            {tabs.map(({ title, TabIcon }, key) => {
            return (<material_1.Tab key={key} label={title} icon={<TabIcon />}/>);
        })}
          </material_1.Tabs>
        </material_1.Card>

        <material_1.Card elevation={5} sx={{ padding: 2 }}>
          <SwipeableForm_1.default tabs={tabs} activeTabIndex={activeTabIndex}/>
        </material_1.Card>
      </material_1.Stack>
    </StyledStack>);
}
exports.default = CustomTabs;
const StyledStack = (0, styles_1.styled)(material_1.Stack)({
    margin: themeConstants_1.defaultSpace,
});
