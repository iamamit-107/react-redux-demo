const { BUY_ICECREAM } = require("./icecreamTypes");

const initialState = {
  numberOfICecreams: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfICecreams: state.numberOfICecreams - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
