import burgerReducer from "./burger/burgerReducer";
import userReducer from "./user/userReducer";

const { combineReducers } = require("redux");
const { default: icecreamReducer } = require("./icecream/icecreamReducer");
const { default: cakeReducer } = require("./cake/cakeReducer");

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  burger: burgerReducer,
  users: userReducer,
});

export default rootReducer;
