"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const formattedTitle_1 = __importDefault(require("../utils/formattedTitle"));
const Vehicles_1 = __importDefault(require("./Vehicles"));
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/actions");
const index_1 = require("../store/selectors/index");
const Companies = (0, react_1.forwardRef)(({ setShowVehiclesFalse }, ref) => {
    const companies = (0, react_redux_1.useSelector)(index_1.getCompanies);
    const whiteListCities = (0, react_redux_1.useSelector)((state) => state.whiteListCities);
    const dispatch = (0, react_redux_1.useDispatch)();
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const shouldFetchCompanies = whiteListCities.length && !companies.length;
    (0, react_1.useEffect)(() => {
        if (!shouldFetchCompanies)
            return;
        dispatch((0, actions_1.fetchCompanies)({}));
        // eslint-disable-next-line
    }, [dispatch, shouldFetchCompanies]);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (<StyledContainerDiv ref={ref}>
      {Boolean(companies.length) ? (companies.map((item, index) => (<StyledAccordion key={index} expanded={expanded === index} onChange={handleChange(index)} TransitionProps={{ unmountOnExit: true }}>
            <StyledAccordionSummary expandIcon={<icons_material_1.ExpandMore />} aria-controls="panel1bh-content">
              <StyledAvatar alt={item.title} src={item.avatar} variant="square"/>

              <StyledTypography variant={"h6"}>
                {(0, formattedTitle_1.default)(item.title)}
              </StyledTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Vehicles_1.default companyId={item._id} setShowVehiclesFalse={setShowVehiclesFalse}/>
            </StyledAccordionDetails>
          </StyledAccordion>))) : (<CircularProgressDiv>
          <material_1.CircularProgress color="primary"/>
        </CircularProgressDiv>)}
    </StyledContainerDiv>);
});
Companies.displayName = "Companies";
exports.default = Companies;
const StyledContainerDiv = (0, styles_1.styled)("div")({
    width: "100%",
    backgroundColor: "lightgray",
    padding: 0,
});
const StyledAccordion = (0, styles_1.styled)(material_1.Accordion)({
    boxShadow: "none",
});
const StyledAccordionSummary = (0, styles_1.styled)(material_1.AccordionSummary)({
    padding: 10,
});
const StyledAccordionDetails = (0, styles_1.styled)(material_1.AccordionDetails)({
    padding: 0,
});
const StyledAvatar = (0, styles_1.styled)(material_1.Avatar)({
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "lightgray",
    objectFit: "fill",
});
const StyledTypography = (0, styles_1.styled)(material_1.Typography)(({ theme }) => ({
    fontSize: 20,
    color: theme.palette.text.secondary,
    margin: "0 10px",
    alignSelf: "center",
}));
const CircularProgressDiv = (0, styles_1.styled)('div')({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
