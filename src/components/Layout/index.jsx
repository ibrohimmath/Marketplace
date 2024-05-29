import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import cn from "./style.module.scss";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
