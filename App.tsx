import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import ReduxExOne from "./src/screens/ReduxExOne";

export type RootStackParamList = {
  Home: undefined;
  Details: { index: number };
  ReduxExOne: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ReduxExOne" component={ReduxExOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
