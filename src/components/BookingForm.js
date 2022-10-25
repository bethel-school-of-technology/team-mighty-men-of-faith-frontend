"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const useSectionPills_1 = __importDefault(require("../hooks/useSectionPills"));
const FormFooter_1 = __importDefault(require("./FormFooter"));
const FormSection_1 = __importDefault(require("./FormSection"));
const LoginModal_1 = __importDefault(require("./LoginModal"));
function BookingForm({ disableInitials }) {
    const { containerHeight, activeTabIndex, containerRef, isOrderPlaced, showLoginModal, setShowLoginModal, setActiveTabIndex, proceedToOrder, } = (0, useSectionPills_1.default)();
    return (<>
      {isOrderPlaced ? (<StyledContainer>
          <material_1.Typography variant="h5" gutterBottom>
            Thank you for your order.
          </material_1.Typography>
          <material_1.Typography variant="subtitle1">
            Your order is confirmed. We have emailed your order confirmation,
            and will send you an update when your order has shipped.
          </material_1.Typography>
        </StyledContainer>) : (<StyledDiv>
          <FormSection_1.default activeTabIndex={activeTabIndex} containerHeight={containerHeight} containerRef={containerRef} disableInitials={disableInitials}/>

          <FormFooter_1.default activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} proceedToOrder={proceedToOrder}/>
        </StyledDiv>)}
      <LoginModal_1.default open={showLoginModal} onClose={() => setShowLoginModal(false)}/>
    </>);
}
exports.default = BookingForm;
/* ------------------------------------ */
const StyledDiv = (0, material_1.styled)("div")({
    overflow: "hidden",
});
const StyledContainer = (0, material_1.styled)(material_1.Container)({
    padding: 50,
    overflow: "hidden",
    textAlign: "center",
});
