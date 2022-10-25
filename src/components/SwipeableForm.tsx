import React from "react";
import SwipeableViews from "react-swipeable-views";

interface schema {
  activeTabIndex: number;
  tabs: any[];
}
export default function SwipeableForm({ activeTabIndex, tabs }: schema) {
  return (
    <SwipeableViews
      // axis={"x"}

      index={activeTabIndex}
      onChangeIndex={() => null}
      disabled={true}
    >
      {tabs.map(({ TabContent }, key) => (
        <div key={key}>{TabContent}</div>
      ))}
    </SwipeableViews>
  );
}
