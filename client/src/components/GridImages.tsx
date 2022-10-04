import { ImageList, ImageListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";
import { sm } from "../theme/themeConstants";
import { carPics } from '../utils/carPictures';

export default function GridImages() {
    const [columns, setColumns] = useState(3);
    const [data, setData] = useState<any[]>([]);
  
    const resizeRef = useRef<any>(null);
    useEffect(() => {
      const onResize = () => {
        clearTimeout(resizeRef.current);
        resizeRef.current = setTimeout(() => {
          const innerWidth = window.innerWidth;
          if (innerWidth > sm) {
            setColumns(3);
          } else if (innerWidth < sm && innerWidth > 400) {
            setColumns(2);
          } else {
            setColumns(1);
          }
        }, 200);
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);
  
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
    <ImageList
      rowHeight={220}
      cols={columns}
      sx={{
        maxWidth: 900,
        maxHeight: 680,
        margin: "auto"
      }}
    >
      {data.slice(0, columns * 3).map((item, index) => (
        <ImageListItem key={index} cols={1}>
          <StyledImage src={item.images[0]} alt={item.title}  />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const StyledImage = styled('img')({
  width: "100%",
  height: "100%",

  objectFit: "fill",
});
