import { Card, Stack, SvgIconTypeMap, Tab, Tabs } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { defaultSpace } from "../theme/themeConstants";
import SwipeableForm from "./SwipeableForm";

interface schema {
  tabs: {
    title: string;
    TabIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
    TabContent: JSX.Element;
  }[];
}
export default function CustomTabs({ tabs }: schema) {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  const handleChange = (event: any, activeTabIndex: number) => {
    setActiveTabIndex(activeTabIndex);
  };

  return (
    <StyledStack alignItems="center" justifyContent="center">
      <Stack
        spacing={1}
        sx={{
          maxWidth: 600,
        }}
      >
        <Card elevation={5}>
          <Tabs value={activeTabIndex} onChange={handleChange}>
            {tabs.map(({ title, TabIcon }, key) => {
              return (
                <Tab
                  key={key}
                  label={title}
                  icon={<TabIcon />}
                  // disableFocusRipple
                  // wrapped
                />
              );
            })}
          </Tabs>
        </Card>

        <Card elevation={5} sx={{ padding: 2 }}>
          <SwipeableForm tabs={tabs} activeTabIndex={activeTabIndex} />
        </Card>
      </Stack>
    </StyledStack>
  );
}

const StyledStack = styled(Stack)({
  margin: defaultSpace,
});
