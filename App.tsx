import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import ReduxExOne from "./src/screens/ReduxExOne";
import Cart from "./src/screens/Cart";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export type RootStackParamList = {
  Home: undefined;
  Details: { index: number };
  ReduxExOne: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="ReduxExOne" component={ReduxExOne} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
