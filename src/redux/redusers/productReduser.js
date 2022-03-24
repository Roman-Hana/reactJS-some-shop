import { actionTypes } from "../constans/actionTypes";

const initialState = {
  product: [{ id: "1", title: "testTitle", category: "testCategory" }],
};

export const productReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
