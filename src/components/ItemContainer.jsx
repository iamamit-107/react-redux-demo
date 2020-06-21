import React from "react";
import { connect } from "react-redux";
import buyCake from "../Redux/cake/cakeActions";
import buyIcecream from "../Redux/icecream/icecreamAction";

const ItemContainer = (props) => {
  return (
    <>
      <h2>Item - {props.item}</h2>
      <button onClick={() => props.buyItem()}>Buy Item</button>
    </>
  );
};

const mapStateToProps = (state, ownState) => {
  const itemCount = ownState.cake
    ? state.cake.numberOfCakes
    : state.icecream.numberOfICecreams;

  return {
    item: itemCount,
  };
};

const mapDispatchToProps = (dispatch, ownState) => {
  const dispatchEvent = ownState.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    buyItem: dispatchEvent,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
