import React, { useState } from "react";

import AppNavigator from "./navigation/index";

import { Provider } from "react-redux";
import store from './store/index';

const App = () => {


  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
};

export default App;
