import { connect } from "react-redux";
import HomeGrid, { HomeGridProps } from "./Component";
import HomeActions from "src/actions/homeActions";
import { getImagesFromState } from "src/selectors/homeSelectors";

const mapStateToProps = (state): Partial<HomeGridProps> => {
  return {
    images: getImagesFromState(state)
  };
};

const mapDispatchToProps: Partial<HomeGridProps> = {
  getImgUrl: HomeActions.FetchPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeGrid);
