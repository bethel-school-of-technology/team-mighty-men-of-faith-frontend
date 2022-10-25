"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Info_1 = __importDefault(require("@mui/icons-material/Info"));
const PlaylistAddCheck_1 = __importDefault(require("@mui/icons-material/PlaylistAddCheck"));
const Policy_1 = __importDefault(require("@mui/icons-material/Policy"));
const material_1 = require("@mui/material");
const react_redux_1 = require("react-redux");
const CustomTabs_1 = __importDefault(require("./CustomTabs"));
function SectionTabs() {
    const { aboutUs, privacyPolicy, termsOfService } = (0, react_redux_1.useSelector)((state) => state.paras);
    return (<CustomTabs_1.default tabs={[
            {
                title: "About Us",
                TabIcon: Info_1.default,
                TabContent: (<material_1.Typography variant={"subtitle1"} color={"GrayText"}>
              {aboutUs}
            </material_1.Typography>),
            },
            {
                title: "Terms of service",
                TabIcon: PlaylistAddCheck_1.default,
                TabContent: (<material_1.Typography variant={"subtitle1"} color={"GrayText"}>
              {termsOfService}
            </material_1.Typography>),
            },
            {
                title: "Privicy Policy",
                TabIcon: Policy_1.default,
                TabContent: (<material_1.Typography variant={"subtitle1"} color={"GrayText"}>
              {privacyPolicy}
            </material_1.Typography>),
            },
        ]}/>);
}
exports.default = SectionTabs;
