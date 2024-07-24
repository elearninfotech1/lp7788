import React, { useState } from "react";
import { connect } from "react-redux";
import buyMobile from "./mobileActionCreator";

const MobileContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>No.of Mobiles : {props.noOfMobile}</h1>
      <input
        type="text"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyMobile(number)}>Buy Now</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfMobile: state.mobile.noOfMobile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyMobile: (number) => {
      dispatch(buyMobile(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileContainer);
