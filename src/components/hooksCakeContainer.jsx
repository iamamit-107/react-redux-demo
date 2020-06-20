import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "../Redux/cake/cakeActions";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Num of Cake - {numberOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
};

export default HooksCakeContainer;
