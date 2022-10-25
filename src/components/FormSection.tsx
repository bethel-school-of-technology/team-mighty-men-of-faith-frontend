import {
    CreditCard,
    DirectionsCar,
    LocationOn,
    Receipt as ReceiptIcon
  } from "@mui/icons-material";
  import React from "react";
  import Checkout from "./CheckOut";
  import FormContainer from "./FormContainer";
  import Location from "./Location";
  import SwipeableTabs from "./SwipeableTabs";
  import Receipt from "./Receipt";
  
  interface schema {
    activeTabIndex: number;
    containerHeight: number | null;
    containerRef: React.RefObject<any>;
    disableInitials?: boolean;
  }
  export default function FormSection({
    activeTabIndex,
    containerHeight,
    containerRef,
    disableInitials,
  }: schema) {
    return (
      <SwipeableTabs
        activeTabIndex={activeTabIndex}
        // setActiveTab={setActiveTab}
        tabs={[
          {
            title: "Booking",
            TabIcon: DirectionsCar,
            TabContent: (
              <FormContainer
                ref={containerRef}
                disableInitials={disableInitials}
              />
            ),
          },
  
          {
            title: "Location",
            TabIcon: LocationOn,
            TabContent:
              activeTabIndex === 1 ? (
                <Location containerHeight={containerHeight} />
              ) : (
                <div />
              ),
            // tabContent: <Location containerHeight={containerHeight} /> ,
          },
          {
            title: "Review Order",
            TabIcon: ReceiptIcon,
            TabContent: activeTabIndex === 2 ? <Receipt /> : <div />,
          },
  
          {
            title: "Check Out",
            TabIcon: CreditCard,
            TabContent: <Checkout containerHeight={containerHeight} />,
          },
        ]}
      />
    );
  }
  