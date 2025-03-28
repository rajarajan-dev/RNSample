import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Details from "../screens/Details";
import Home from "../screens/Home";
import ReduxExOne from "../screens/ReduxExOne";

export type RootStackParamList = {
  Home: undefined;
  Details: { index: number };
  ReduxExOne: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ReduxExOne" component={ReduxExOne} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
