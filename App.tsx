import "./gesture-handler";
import React from "react";

import { Provider } from "react-redux";
import { store } from "./src/store/store";
import AppNavigator from "./src/navigation/AppNavigator";

if (__DEV__) {
  require("./ReactotronConfig");
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
