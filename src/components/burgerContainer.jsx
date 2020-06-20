import React from "react";
import { connect } from "react-redux";
import { addBurger, buyBurger } from "../Redux/burger/burgerActions";

const BurgerContainer = (props) => {
  return (
    <>
      <h2>Numebr of Burger - {props.numberOfBurgers} </h2>
      <button onClick={() => props.buyBurger()}>Buy Burger</button>
      <button onClick={() => props.addBurger()}>Add Burger</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfBurgers: state.burger.numberOfBurgers,
  };
};

const mapDispatchTpProps = (dispatch) => {
  return {
    buyBurger: () => dispatch(buyBurger()),
    addBurger: () => dispatch(addBurger()),
  };
};

export default connect(mapStateToProps, mapDispatchTpProps)(BurgerContainer);
