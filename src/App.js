import React from "react";
import "./App.css";
import CakeContainer from "./components/cakeContainer";
import { Provider } from "react-redux";

import HooksCakeContainer from "./components/hooksCakeContainer";
import store from "./Redux/store";
import IcecreamContainer from "./components/icecreamContainer";
import BurgerContainer from "./components/burgerContainer";
import NewCakeContainer from "./components/newCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <BurgerContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
