const { BUY_BURGER, ADD_BURGER } = require("./burgerTypes");

const initialState = {
  numberOfBurgers: 30,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BURGER:
      return {
        ...state,
        numberOfBurgers: state.numberOfBurgers - 1,
      };
    case ADD_BURGER:
      return {
        ...state,
        numberOfBurgers: state.numberOfBurgers + 1,
      };
    default:
      return state;
  }
};

export default burgerReducer;
