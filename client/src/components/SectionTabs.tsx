import InfoIcon from "@mui/icons-material/Info";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PolicyIcon from "@mui/icons-material/Policy";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { stateTypes } from "../types";
import CustomTabs from "./CustomTabs";

export default function SectionTabs() {
  const { aboutUs, privacyPolicy, termsOfService } = useSelector(
    (state: stateTypes) => state.paras
  );

  return (
    <CustomTabs
      tabs={[
        {
          title: "About Us",
          TabIcon: InfoIcon,
          TabContent: (
            <Typography variant={"subtitle1"} color={"GrayText"}>
              {aboutUs}
            </Typography>
          ),
        },
        {
          title: "Terms of service",
          TabIcon: PlaylistAddCheckIcon,
          TabContent: (
            <Typography variant={"subtitle1"} color={"GrayText"}>
              {termsOfService}
            </Typography>
          ),
        },
        {
          title: "Privicy Policy",
          TabIcon: PolicyIcon,
          TabContent: (
            <Typography variant={"subtitle1"} color={"GrayText"}>
              {privacyPolicy}
            </Typography>
          ),
        },
      ]}
    />
  );
}
