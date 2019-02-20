import { ActionType } from "src/actions/ActionType";

const defaultState = {
  images: []
};

const basic = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.SetImages: {
      return { ...state, images: action.payload };
    }

    default:
      return state;
  }
};

export default basic;
