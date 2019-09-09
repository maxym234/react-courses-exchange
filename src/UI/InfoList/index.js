import React from "react";
//css
import s from "./infolist.module.sass";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
export default ({
  listOne = [],
  listTwo = [],
  listThree = [],
  listFour = []
}) => (
  <div className={s.UI}>
    <ul>
      {listOne.map(item => {
        return (
          <Link className={s.listOne} to={item}>
            {item}
          </Link>
        );
      })}
    </ul>
    <ul>
      {listTwo.map(item => {
        return (
          <Link className={s.listOne} to={item}>
            {item}
          </Link>
        );
      })}
    </ul>
    <ul>
      {listThree.map(item => {
        return (
          <Link className={s.listOne} to={item}>
            {item}
          </Link>
        );
      })}
    </ul>
    <ul>
      {listFour.map(item => {
        return (
          <Link className={s.listOne} to={item}>
            {item}
          </Link>
        );
      })}
    </ul>
  </div>
);
