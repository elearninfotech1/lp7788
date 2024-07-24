import { buy_laptop } from "./laptopAction";

const initialState = {
  noOfLaptop: 50,
};

const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_laptop:
      return {
        noOfLaptop: state.noOfLaptop - action.payload,
      };
    default:
      return state;
  }
};

export default laptopReducer;
