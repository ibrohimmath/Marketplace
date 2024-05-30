import React from "react";
import clsx from "clsx";
import cn from "./style.module.scss";

function Button({ children, type, style }) {
  return (
    <button className={clsx(cn["btn--" + type])} style={style}>
      {children}
    </button>
  );
}

export default Button;
