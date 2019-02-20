import * as React from "react";
import { lazy, Suspense } from "react";
import classes from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomeGrid = lazy(() => import("../HomeGrid"));

// store.dispatch(FarceActions.push('/new/path'));

const MainPage = () => {
  return (
    <>
      <h1 className={classes.header}>WELCOME</h1>

      <Suspense fallback={<CircularProgress className={classes.progress} />}>
        <section>
          <HomeGrid />
        </section>
      </Suspense>
    </>
  );
};

export default MainPage;
