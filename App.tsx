import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import ComponentsAndProps from "./src/screens/Details";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={ComponentsAndProps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
