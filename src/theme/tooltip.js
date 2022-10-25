"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function Tooltip(theme) {
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[800]
                },
                arrow: {
                    color: theme.palette.grey[800]
                }
            }
        }
    };
}
exports.default = Tooltip;
