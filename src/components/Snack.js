"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/actions");
const Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
function Snack() {
    const snackBarMsg = (0, react_redux_1.useSelector)((state) => state.snackBar);
    const dispatch = (0, react_redux_1.useDispatch)();
    return (<material_1.Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={Boolean(snackBarMsg.length)} action={<Clear_1.default onClick={() => dispatch((0, actions_1.clearSnackBar)())}/>} onClose={() => dispatch((0, actions_1.clearSnackBar)())} message={snackBarMsg} autoHideDuration={5000}/>);
}
exports.default = Snack;
