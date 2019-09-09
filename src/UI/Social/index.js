import React from "react";
//css
import s from "./social.module.sass";
import Twit from "./twitter.svg";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

const TwitterIcon =
  "https://www.pinclipart.com/picdir/middle/91-911613_white-twitter-bird-transparent-background-clipart.png";

export default ({ src = TwitterIcon, style = {} }) => (
  <div className={s.UI}>
    <ul className={s.SocialIcon}>
      <li className={s.Twit}>
        <img src={Twit} style={style} alt="logo" />
      </li>
      <li className={s.Face}>f</li>
      <li>in</li>
    </ul>
  </div>
);
