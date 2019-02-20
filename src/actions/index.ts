const giphyAPI =
  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Zc4Lmx1wHRWGZTOdXoWxZvvBhCVHXY1p&limit=5";

export const setImgURL = (url: string) => ({
  type: "SET_IMG_URL",
  url
});

export const getImgURL = () => {
  return dispatch => {
    fetchPost()
      .then(results => dispatch(setImgURL(results.url)))
      .catch(err => console.error(err));
  };
};

const fetchPost = async () => {
  const response = await fetch(giphyAPI);
  const json = await response.json();
  return { url: json.data[0].images["fixed_height_small"].url };
};
