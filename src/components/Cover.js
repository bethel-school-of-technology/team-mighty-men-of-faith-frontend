"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const themeConstants_1 = require("../theme/themeConstants");
const Parallax_1 = __importDefault(require("./Parallax"));
const cover_jpeg_1 = __importDefault(require("../assets/cover.jpeg"));
const logo_png_1 = __importDefault(require("../assets/logo.png"));
function Cover() {
    return (<Parallax_1.default image={cover_jpeg_1.default}>
      <div style={{ margin: themeConstants_1.defaultSpace }}>
        <img src={logo_png_1.default} alt={"logo"} width={200} height={90}/>
      </div>
    </Parallax_1.default>);
}
exports.default = Cover;
