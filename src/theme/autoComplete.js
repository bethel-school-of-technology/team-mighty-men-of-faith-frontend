"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function Autocomplete(theme) {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.customShadows.z20
                }
            }
        }
    };
}
exports.default = Autocomplete;
