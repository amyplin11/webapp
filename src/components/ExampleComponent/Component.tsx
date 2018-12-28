import * as React from "react";
import { deepCopy } from "../../testFunctions";
import { getImgURL } from "../../actions";
// import { setup } from "../Middleware";

const ExampleComponent = ({ imgURL, getImgURL }) => {
  const onClick = () => {
    getImgURL();
    // setup();
  };
  return (
    <div>
      <button onClick={onClick}>Run Function</button>
      <img src={imgURL} />
    </div>
  );
};
export default ExampleComponent;
