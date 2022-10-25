import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

import card from "./card";
import lists from "./lists";
import paper from "./paper";
import input from "./input";
import button from "./button";
import tooltip from "./tooltip";
import backdrop from "./backdrop";
import typography from "./typographyTheme";
import iconButton from "./iconButton";
import autocomplete from "./autoComplete";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme):Components {
  return Object.assign(
    card(theme),
    lists(theme),
    paper(),
    input(theme),
    button(theme),
    tooltip(theme),
    backdrop(theme),
    typography(theme),
    iconButton(theme),
    autocomplete(theme)
  );
}
