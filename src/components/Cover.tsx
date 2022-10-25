import React from "react";
import { defaultSpace } from "../theme/themeConstants";
import Parallax from "./Parallax";
import coverImg from '../assets/cover.jpeg'
import logoImg from '../assets/logo.png'

export default function Cover() {
  return (
    <Parallax image={coverImg}>
      <div style={{ margin: defaultSpace }}>
        <img src={logoImg} alt={"logo"} width={200} height={90} />
      </div>
    </Parallax>
  );
}
