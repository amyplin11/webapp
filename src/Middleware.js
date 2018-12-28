const giphyAPI =
  "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Zc4Lmx1wHRWGZTOdXoWxZvvBhCVHXY1p&limit=5";

export const setup = () => {
  fetch(giphyAPI)
    .then(response => response.json())
    .then(json => {
      console.log("json = ", json);
      return json.data[0].url;
    });
};
