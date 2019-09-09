import React from "react";

import s from "./badge.module.sass";

export default ({ count = 0, onToggle }) => (
  <div id="noclick" className={s.UI} onClick={onToggle("notification")}>
    <i className="pi pi-envelope" id="noclick" />
    <div className={s.count} id="noclick">
      {count}
    </div>
  </div>
);
