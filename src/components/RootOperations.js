"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoadingIndicator_1 = __importDefault(require("./LoadingIndicator"));
const NavBar_1 = __importDefault(require("./NavBar"));
const Snack_1 = __importDefault(require("./Snack"));
function RootOperations({ children }) {
    return (<>
      <NavBar_1.default />
      {children}

      <Snack_1.default />
      <LoadingIndicator_1.default />
    </>);
}
exports.default = RootOperations;
