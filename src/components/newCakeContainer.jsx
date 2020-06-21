import React, { useState } from "react";

import { connect } from "react-redux";
import buyCake from "../Redux/cake/cakeActions";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <h2>Number of Cake - {props.numberOfCakes} </h2>
      <input
        type="text"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
