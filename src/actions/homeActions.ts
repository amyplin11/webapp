import { createAction } from "src/utils";
import { ActionType } from "./ActionType";

// const giphyAPI =
//   "http://api.giphy.com/v1/gifs/random?tag=cat&api_key=Zc4Lmx1wHRWGZTOdXoWxZvvBhCVHXY1p";

const photoAPI =
  "https://api.unsplash.com/photos/random/?client_id=1f2ebaca676b28537707a0d981b5f398faf86fb51946598d01f7a456ce97b4b8&count=20&orientation=portrait";

const HomeActions = {
  // FetchPost: () => createAction(ActionType.GetImgUrl),
  FetchPost: () => fetchImgUrl(),
  FetchPostSuccess: (images: string[]) =>
    createAction(ActionType.SetImages, images),
  FetchPostFailure: () => {}
};

export default HomeActions;

export const fetchImgUrl = () => {
  return dispatch => {
    return fetchPost()
      .then(results => {
        dispatch(HomeActions.FetchPostSuccess(results.images));
      })
      .catch(err => console.error(err));
  };
};

const fetchPost = async () => {
  const response = await fetch(photoAPI);
  // const response = await fetch(giphyAPI);

  const json = await response.json();
  console.log("json = ", json);
  return {
    images: json.map(data => {
      return {
        url: data.urls.small,
        description: data.description,
        createdOn: data.created_at
      };
    })
  };

  // return { url: json.data.images["original"].url };
};
