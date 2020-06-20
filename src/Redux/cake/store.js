const { createStore } = require("redux");
const { default: cakeReducer } = require("./cakeReducer");

const store = createStore(cakeReducer);

export default store;
