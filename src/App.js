import React from "react";
import "./App.css";
import CakeContainer from "./components/cakeContainer";
import { Provider } from "react-redux";

import HooksCakeContainer from "./components/hooksCakeContainer";
import store from "./Redux/store";
import IcecreamContainer from "./components/icecreamContainer";
import BurgerContainer from "./components/burgerContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <BurgerContainer />
      </div>
    </Provider>
  );
}

export default App;
