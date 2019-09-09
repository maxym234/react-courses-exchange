import React from "react";
import { Card } from "primereact/card";
import s from "./dropdownpanel.module.sass";

// props = { username: 'Clint'}
export default ({ show, links = [], type = "", style = {} }) => (
  <div
    className={s.Panel}
    style={{ ...style, display: show === type ? "block" : "none" }}
  >
    <Card>
      <ul className={s.links}>
        {links.map(item => {
          return <li className={s.li}>{item}</li>;
        })}
      </ul>
    </Card>
  </div>
);
