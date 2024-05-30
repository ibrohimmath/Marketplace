import React from "react";
import clsx from "clsx";
import Container from "../../components/Container";
import cn from "./style.module.scss";

function Home() {
  return (
    <div className={clsx(cn["home"])}>
      <Container style={{ color: "red" }}>Home</Container>
    </div>
  );
}

export default Home;
