import React from "react";

import s from "./menu.module.sass";
//
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
//
export default ({ list = [] }) => (
  <ul className={s.UI}>
    {list.map(item => {
      return (
        <Link className={s.li} to={item}>
          {item}
        </Link>
      );
    })}
  </ul>
);
