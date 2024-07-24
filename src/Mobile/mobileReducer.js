import { buy_mobile } from "./mobileAction";

const initialState = {
  noOfMobile: 60,
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_mobile:
      return {
        noOfMobile: state.noOfMobile - action.payload,
      };
    default:
      return state;
  }
};

export default mobileReducer;
