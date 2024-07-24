import React, { useState } from "react";
import { connect } from "react-redux";
import buyLaptop from "./laptopActionCreator";

const LaptopContainer = (props) => {
  const [number, setNumber] = useState();
  return (
    <div>
      <h1>No.of Laptops : {props.noOfLaptop}</h1>
      <input
        type="text"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyLaptop(number)}>Buy Now</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfLaptop: state.laptop.noOfLaptop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: (num) => {
      dispatch(buyLaptop(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaptopContainer);
