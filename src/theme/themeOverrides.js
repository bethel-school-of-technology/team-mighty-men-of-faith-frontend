"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("./card"));
const lists_1 = __importDefault(require("./lists"));
const paper_1 = __importDefault(require("./paper"));
const input_1 = __importDefault(require("./input"));
const button_1 = __importDefault(require("./button"));
const tooltip_1 = __importDefault(require("./tooltip"));
const backdrop_1 = __importDefault(require("./backdrop"));
const typographyTheme_1 = __importDefault(require("./typographyTheme"));
const iconButton_1 = __importDefault(require("./iconButton"));
const autoComplete_1 = __importDefault(require("./autoComplete"));
// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
    return Object.assign((0, card_1.default)(theme), (0, lists_1.default)(theme), (0, paper_1.default)(), (0, input_1.default)(theme), (0, button_1.default)(theme), (0, tooltip_1.default)(theme), (0, backdrop_1.default)(theme), (0, typographyTheme_1.default)(theme), (0, iconButton_1.default)(theme), (0, autoComplete_1.default)(theme));
}
exports.default = ComponentsOverrides;
