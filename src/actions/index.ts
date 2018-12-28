const giphyAPI =
  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Zc4Lmx1wHRWGZTOdXoWxZvvBhCVHXY1p&limit=5";

export const setup = () => {
  fetch(giphyAPI)
    .then(response => response.json())
    .then(json => {
      console.log("json = ", json.data[0].url);
      return json.data[0].url;
    });
};

export const setImgURL = (url: string) => ({
  type: "SET_IMG_URL",
  url
});

export const getImgURL = () => {
  return dispatch => {
    fetchURL()
      .then(results => dispatch(setImgURL(results.url)))
      .catch(err => console.error(err));
  };
};

const fetchURL = async () => {
  const response = await fetch(giphyAPI);
  const json = await response.json();
  return { url: json.data[0].images["fixed_height_small"].url };
};
