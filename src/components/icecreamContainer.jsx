import React from "react";
import buyIcecream from "../Redux/icecream/icecreamAction";
import { connect } from "react-redux";

const IceceramContainer = (props) => {
  return (
    <>
      <h2>Number of Iceceram - {props.numberOfIcecerams} </h2>
      <button onClick={() => props.buyIcecream()}>Buy Icecream</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfIcecerams: state.icecream.numberOfICecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceceramContainer);
