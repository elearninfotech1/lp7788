import { buy_mobile } from "./mobileAction";

function buyMobile(num) {
  return {
    type: buy_mobile,
    payload: num,
  };
}

export default buyMobile;
