import React from "react";
import { InputText } from "primereact/inputtext";
//css
import s from "./search.module.sass";

export default ({ onToggle }) => (
  <div className={s.UI} id="noclick">
    <div className="p-inputgroup" id="noclick">
      <span
        id="noclick"
        className="p-inputgroup-addon"
        onClick={onToggle("search")}
      >
        <i className="pi pi-search" id="noclick" />
      </span>
      <InputText placeholder="Search" />
    </div>
  </div>
);
