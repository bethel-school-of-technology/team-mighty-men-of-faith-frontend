import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { Card, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { getCurrentVehicle } from "../store/selectors";

import { carPics } from "../utils/carPictures";

export default function SectionCarousel() {
  const { images, title, model } = useSelector(getCurrentVehicle);

  const [data, setData] = useState<any[]>([]);
  const [imageIndex, setImageIndex] = useState(0);

  const interval = useRef<any>(null);
  useEffect(() => {
    clearInterval(interval.current);
    if (Boolean(images.length)) {
      interval.current = setInterval(() => {
        setImageIndex((prevState) => {
          if (prevState === images.length - 1) {
            return 0;
          }
          return prevState + 1;
        });
      }, 5000);
    } else {
      interval.current = setInterval(() => {
        setImageIndex((prevState) => {
          if (prevState === 2) {
            return 0;
          }
          return prevState + 1;
        });
      }, 5000);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [images]);

  useEffect(() => {
    const newData = carPics;

    const shuffileTimes = Math.floor(newData.length + 100 * Math.random());
    for (let i = 0; i < shuffileTimes; i++) {
      const position1 = Math.floor(Math.random() * newData.length);
      const position2 = Math.floor(Math.random() * newData.length);

      const tempValue = newData[position1];
      newData[position1] = newData[position2];
      newData[position2] = tempValue;
    }

    setData(newData);
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center">
      <Card sx={{ maxWidth: 700 }}>
        <SwipeableViews
          animateTransitions={true}
          index={imageIndex}
          axis={imageIndex === 0 ? "x-reverse" : "x"}
        >
          {Boolean(images?.length)
            ? images.map((image, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <StyledImage
                    src={image}
                    alt={title}
                    width={800}
                    height={450}
                  />

                  <StyledCaptionDiv>
                    <DriveEtaIcon color={"primary"} />
                    <StyledCaptionH4>{title + " - " + model}</StyledCaptionH4>
                  </StyledCaptionDiv>
                </div>
              ))
            : data.slice(0, 3).map((item, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <StyledImage
                    src={item.images[0]}
                    alt={item.title}
                    width={800}
                    height={450}
                  />
                  <StyledCaptionDiv>
                    <DriveEtaIcon color={"primary"} />
                    <StyledCaptionH4>{item.title}</StyledCaptionH4>
                  </StyledCaptionDiv>
                </div>
              ))}
        </SwipeableViews>
      </Card>
    </Stack>
  );
}

const StyledImage = styled("img")({
  aspectRatio: "16/9",
  objectFit: "contain",
});
const StyledCaptionDiv = styled("div")({
  position: "absolute",
  left: 20,
  bottom: 20,
  borderRadius: 10,
  backgroundColor: "rgba(0,0,0,0.3)",
  display: "flex",
  alignItems: "center",
  padding: 5,
});

const StyledCaptionH4 = styled("h4")({
  whiteSpace: "nowrap",
  color: "white",
});
