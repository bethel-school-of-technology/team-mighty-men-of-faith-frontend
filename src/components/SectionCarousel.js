"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DriveEta_1 = __importDefault(require("@mui/icons-material/DriveEta"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_swipeable_views_1 = __importDefault(require("react-swipeable-views"));
const selectors_1 = require("../store/selectors");
const carPictures_1 = require("../utils/carPictures");
function SectionCarousel() {
    const { images, title, model } = (0, react_redux_1.useSelector)(selectors_1.getCurrentVehicle);
    const [data, setData] = (0, react_1.useState)([]);
    const [imageIndex, setImageIndex] = (0, react_1.useState)(0);
    const interval = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        clearInterval(interval.current);
        if (Boolean(images.length)) {
            interval.current = setInterval(() => {
                setImageIndex((prevState) => {
                    if (prevState === images.length - 1) {
                        return 0;
                    }
                    return prevState + 1;
                });
            }, 5000);
        }
        else {
            interval.current = setInterval(() => {
                setImageIndex((prevState) => {
                    if (prevState === 2) {
                        return 0;
                    }
                    return prevState + 1;
                });
            }, 5000);
        }
        return () => {
            clearInterval(interval.current);
        };
    }, [images]);
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
    return (<material_1.Stack alignItems="center" justifyContent="center">
      <material_1.Card sx={{ maxWidth: 700 }}>
        <react_swipeable_views_1.default animateTransitions={true} index={imageIndex} axis={imageIndex === 0 ? "x-reverse" : "x"}>
          {Boolean(images?.length)
            ? images.map((image, index) => (<div key={index} style={{ position: "relative" }}>
                  <StyledImage src={image} alt={title} width={800} height={450}/>

                  <StyledCaptionDiv>
                    <DriveEta_1.default color={"primary"}/>
                    <StyledCaptionH4>{title + " - " + model}</StyledCaptionH4>
                  </StyledCaptionDiv>
                </div>))
            : data.slice(0, 3).map((item, index) => (<div key={index} style={{ position: "relative" }}>
                  <StyledImage src={item.images[0]} alt={item.title} width={800} height={450}/>
                  <StyledCaptionDiv>
                    <DriveEta_1.default color={"primary"}/>
                    <StyledCaptionH4>{item.title}</StyledCaptionH4>
                  </StyledCaptionDiv>
                </div>))}
        </react_swipeable_views_1.default>
      </material_1.Card>
    </material_1.Stack>);
}
exports.default = SectionCarousel;
const StyledImage = (0, styles_1.styled)("img")({
    aspectRatio: "16/9",
    objectFit: "contain",
});
const StyledCaptionDiv = (0, styles_1.styled)("div")({
    position: "absolute",
    left: 20,
    bottom: 20,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    padding: 5,
});
const StyledCaptionH4 = (0, styles_1.styled)("h4")({
    whiteSpace: "nowrap",
    color: "white",
});
