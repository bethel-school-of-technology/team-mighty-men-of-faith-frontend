import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    CircularProgress,
    Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { forwardRef, useEffect, useState } from "react";
import formattedTitle from "../utils/formattedTitle";
import Vehicles from "./Vehicles";

import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../store/actions";
import { getCompanies } from "../store/selectors/index";
import { stateTypes } from "./../types/index";

interface schema {
  setShowVehiclesFalse: () => void;
}

const Companies = forwardRef(({ setShowVehiclesFalse }: schema, ref: any) => {
    const companies = useSelector(getCompanies);
    const whiteListCities = useSelector(
      (state: stateTypes) => state.whiteListCities
    );
    const dispatch = useDispatch<any>();
  
    const [expanded, setExpanded] = useState<number | false>(false);
  
    const shouldFetchCompanies = whiteListCities.length && !companies.length;
    useEffect(() => {
      if (!shouldFetchCompanies) return;
      dispatch(fetchCompanies({}));
  
      // eslint-disable-next-line
    }, [dispatch, shouldFetchCompanies]);
  
    const handleChange = (panel: number) => (event: any, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return (
    <StyledContainerDiv ref={ref}>
      {Boolean(companies.length) ? (
        companies.map((item, index) => (
          <StyledAccordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            TransitionProps={{ unmountOnExit: true }}
          >
            <StyledAccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
            >
              <StyledAvatar
                alt={item.title}
                src={item.avatar}
                variant="square"
              />

              <StyledTypography variant={"h6"}>
                {formattedTitle(item.title)}
              </StyledTypography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Vehicles
                companyId={item._id}
                setShowVehiclesFalse={setShowVehiclesFalse}
              />
            </StyledAccordionDetails>
          </StyledAccordion>
        ))
      ) : (
        <CircularProgressDiv>
          <CircularProgress color="primary" />
        </CircularProgressDiv>
      )}
    </StyledContainerDiv>
  );
});
Companies.displayName = "Companies";
export default Companies;

const StyledContainerDiv = styled("div")({
  width: "100%",
  backgroundColor: "lightgray",
  padding: 0,
});
const StyledAccordion = styled(Accordion)({
  boxShadow: "none",
});
const StyledAccordionSummary = styled(AccordionSummary)({
  padding: 10,
});
const StyledAccordionDetails = styled(AccordionDetails)({
  padding: 0,
});
const StyledAvatar = styled(Avatar)({
  width: 60,
  height: 60,
  borderRadius: 10,
  backgroundColor: "lightgray",
  objectFit: "fill",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  color: theme.palette.text.secondary,
  margin: "0 10px",
  alignSelf: "center",
}));

const CircularProgressDiv = styled('div')({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
