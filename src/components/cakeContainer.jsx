import React from "react";

import { connect } from "react-redux";
import buyCake from "../Redux/cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <>
      <h2>Number of Cake - {props.numberOfCakes} </h2>
      <button onClick={() => props.buyCake()}>Buy Cake</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
