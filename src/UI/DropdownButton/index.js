import React from "react";
import { Card } from "primereact/card";
import s from "./dropdownbutton.module.sass";

// props = { username: 'Clint'}
export default ({ username = "Guest", onToggle }) => (
  <div id="noclick" className={s.UI} onClick={onToggle("usermenu")}>
    <span id="noclick">{username}</span>
    <i className="pi pi-angle-down" id="noclick" />
  </div>
);
