import { buy_laptop } from "./laptopAction";

function buyLaptop(num = 1) {
  return {
    type: buy_laptop,
    payload: num,
  };
}

export default buyLaptop;
