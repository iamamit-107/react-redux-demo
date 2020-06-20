import burgerReducer from "./burger/burgerReducer";

const { combineReducers } = require("redux");
const { default: icecreamReducer } = require("./icecream/icecreamReducer");
const { default: cakeReducer } = require("./cake/cakeReducer");

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  burger: burgerReducer,
});

export default rootReducer;
