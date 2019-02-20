import * as React from "react";
import HomeGrid from "../HomeGrid";
import classes from "./styles";

const MainPage = () => {
  return (
    <>
      <h1 className={classes.header}>WELCOME</h1>
      <HomeGrid />
    </>
  );
};

export default MainPage;
