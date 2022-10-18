import { SvgIconTypeMap, Tab, Tabs } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import SwipeableForm from "./SwipeableForm";

interface schema {
  active?: number;
  tabs: {
    title: string;
    TabIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
    TabContent: JSX.Element;
  }[];

  activeTabIndex: number;
}

const SwipeableTabs = ({ tabs, activeTabIndex = 0 }: schema) => {
  return (
    <div>
      <StyledTabs
        value={activeTabIndex}
        variant={"fullWidth"}
        // onChange={handleChange}
      >
        {tabs.map(({ TabIcon, title }, index) => (
          <StyledTab
            key={index}
            disableRipple
            label={title}
            icon={<TabIcon fontSize={"large"} />}
          />
        ))}
      </StyledTabs>
      <SwipeableForm activeTabIndex={activeTabIndex} tabs={tabs} />
    </div>
  );
};

export default memo(SwipeableTabs);

const StyledTabs = styled(Tabs)({
  margin: "20px 0",
});

const StyledTab = styled(Tab)({
  height: 100,
});
