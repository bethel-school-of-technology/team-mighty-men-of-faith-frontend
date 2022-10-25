"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function Paper() {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 3,
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                }
            }
        }
    };
}
exports.default = Paper;
