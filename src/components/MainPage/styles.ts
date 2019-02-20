import { jss } from "react-jss";

const styles = {
  header: {
    textAlign: "center",
    padding: "50px"
  }
};

const { classes } = jss.createStyleSheet(styles as any).attach();
export default classes;
