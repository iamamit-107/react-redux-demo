const { BUY_ICECREAM } = require("./icecreamTypes");

const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

export default buyIcecream;
