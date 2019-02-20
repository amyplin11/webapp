import { ActionType } from "src/actions/ActionType";
const giphyAPI =
  "http://api.giphy.com/v1/gifs/random?tag=cat&api_key=Zc4Lmx1wHRWGZTOdXoWxZvvBhCVHXY1p";

const testMiddleware = ({ dispatch, getState }) => next => action => {
  switch (action.type) {
    case ActionType.GetImgUrl:
      getImgUrl();
      break;

    default:
      break;
  }
  return next(action);
};

export default testMiddleware;

// const getImgUrl = () => {
//   console.log("fetching post!!!!");
//   return dispatch => {
//     console.log("callign etch");
//     return fetchPost()
//       .then(results => {
//         console.log("returned");
//         dispatch(HomeActions.FetchPostSuccess(results.url));
//       })
//       .catch(err => console.error(err));
//   };
// };

function getImgUrl() {
  console.log("fetching post!!!!");
  // return dispatch => {
  //   console.log("callign etch");

  return dispatch => {
    return fetchPost()
      .then(results => {
        console.log("returned");
        dispatch(HomeActions.FetchPostSuccess(results.url));
      })
      .catch(err => console.error(err));
  };
}

const fetchPost = async () => {
  const response = await fetch(giphyAPI);
  const json = await response.json();
  console.log("value = ", json);
  return { url: json.data.images["original"].url };
};
