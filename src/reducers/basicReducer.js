const defaultState = {
  imgURL: ""
};

const basicReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_IMG_URL": {
      return { ...state, imgURL: action.url };
    }

    default:
      return state;
  }
};

export default basicReducer;
