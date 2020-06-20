const { BUY_BURGER, ADD_BURGER } = require("./burgerTypes");

export const buyBurger = () => {
  return {
    type: BUY_BURGER,
  };
};

export const addBurger = () => {
  return {
    type: ADD_BURGER,
  };
};
