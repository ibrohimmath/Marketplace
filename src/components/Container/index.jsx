import React from "react";
import clsx from "clsx";
import cn from "./style.module.scss";

function Container({ children, style }) {
  return (
    <>
      <div className={clsx(cn["container"])} style={style ? style : {}}>
        {children}
      </div>
    </>
  );
}

export default Container;
