import React from "react";
import clsx from "clsx";
import Button from "../../Button";
import LogoSrc from "/public/Logo.png";
import barSrc from "/public/bar.png";
import cn from "./style.module.scss";

function Nav() {
  return (
    <header>
      <nav>
        <div className={clsx(cn["logo"])}>
          <img src={LogoSrc} alt="Marketplace Logo" />
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className={clsx(cn["open"])}>
          <img src={barSrc} alt="Navbar bar opener" />
        </label>
        <label htmlFor="check" className={clsx(cn["shadow"])}></label>
        <label htmlFor="check" className={clsx(cn["close"])}>
          <i className="fa-solid fa-xmark"></i>
        </label>

        <ul className={clsx(cn["nav__list"])}>
          <li className={clsx(cn["nav__item"])}>
            <a href="#">Marketplace</a>
          </li>
          <li className={clsx(cn["nav__item"])}>
            <a href="#">Rankings</a>
          </li>
          <li className={clsx(cn["nav__item"])}>
            <a href="#">Connect a wallet</a>
          </li>
          <Button type="secondary">
            <i className="fa-regular fa-user"></i> Sign up
          </Button>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
