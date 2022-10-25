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
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importStar(require("react"));
const themeConstants_1 = require("../theme/themeConstants");
const carPictures_1 = require("../utils/carPictures");
function GridImages() {
    const [columns, setColumns] = (0, react_1.useState)(3);
    const [data, setData] = (0, react_1.useState)([]);
    const resizeRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const onResize = () => {
            clearTimeout(resizeRef.current);
            resizeRef.current = setTimeout(() => {
                const innerWidth = window.innerWidth;
                if (innerWidth > themeConstants_1.sm) {
                    setColumns(3);
                }
                else if (innerWidth < themeConstants_1.sm && innerWidth > 400) {
                    setColumns(2);
                }
                else {
                    setColumns(1);
                }
            }, 200);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    (0, react_1.useEffect)(() => {
        const newData = carPictures_1.carPics;
        const shuffileTimes = Math.floor(newData.length + 100 * Math.random());
        for (let i = 0; i < shuffileTimes; i++) {
            const position1 = Math.floor(Math.random() * newData.length);
            const position2 = Math.floor(Math.random() * newData.length);
            const tempValue = newData[position1];
            newData[position1] = newData[position2];
            newData[position2] = tempValue;
        }
        setData(newData);
    }, []);
    return (<material_1.ImageList rowHeight={220} cols={columns} sx={{
            maxWidth: 900,
            maxHeight: 680,
            margin: "auto"
        }}>
      {data.slice(0, columns * 3).map((item, index) => (<material_1.ImageListItem key={index} cols={1}>
          <StyledImage src={item.images[0]} alt={item.title}/>
        </material_1.ImageListItem>))}
    </material_1.ImageList>);
}
exports.default = GridImages;
const StyledImage = (0, styles_1.styled)('img')({
    width: "100%",
    height: "100%",
    objectFit: "fill",
});
