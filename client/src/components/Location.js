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
const LocationOn_1 = __importDefault(require("@mui/icons-material/LocationOn"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const google_map_react_1 = __importDefault(require("google-map-react"));
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const CustomizedInputBase_1 = __importDefault(require("./CustomizedInputBase"));
const key = "AIzaSyDJjNUjcRJeT5FdhYJxg2UCd6-XoiCfQwo";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Marker = (...props) => <LocationOn_1.default />;
const Location = ({ containerHeight }) => {
    const { location: { lat, lng, isDefault }, } = (0, react_redux_1.useSelector)((state) => state.formFields);
    return (<StyledContainer style={{
            height: containerHeight ?? 300,
        }}>
      <CustomizedInputBase_1.default />
      <google_map_react_1.default bootstrapURLKeys={{ key }} center={{
            lat,
            lng,
        }} defaultZoom={11}>
        {!isDefault && <Marker lat={lat} lng={lng}/>}
      </google_map_react_1.default>
    </StyledContainer>);
};
exports.default = (0, react_1.memo)(Location);
const StyledContainer = (0, styles_1.styled)(material_1.Container)({
    padding: 0,
    width: "100%",
    position: "relative",
});
