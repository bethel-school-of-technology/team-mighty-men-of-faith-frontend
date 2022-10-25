"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function Typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
}
exports.default = Typography;
