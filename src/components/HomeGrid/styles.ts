import { jss } from "react-jss";

const styles = {
  homeGrid: {
    height: "100%",
    width: "100%",
    display: "grid",
    gridGap: "25px",
    gridTemplateRows: "repeat(auto-fit, minmax(250px, 1fr))",
    // gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
    justifyItems: "center",
    padding: "0px 10px"
  }
};

const { classes } = jss.createStyleSheet(styles as any).attach();
export default classes;
