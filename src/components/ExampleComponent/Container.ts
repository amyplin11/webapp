import { connect } from "react-redux";
import ExampleComponent from "./Component";
import { setImgURL, getImgURL } from "../../actions";

const mapStateToProps = state => ({
  imgURL: state.imgURL
});

const mapDispatchToProps = {
  setImgURL,
  getImgURL
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
