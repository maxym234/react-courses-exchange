import React from "react";
import Logo from "./assets/logo.svg";

export default ({ src = Logo, style = {} }) => {
  return <img src={src} style={style} alt="logo" />;
};
