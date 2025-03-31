import React, { Dispatch, SetStateAction } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Details from "../screens/Details";
import Home from "../screens/Home";
import ReduxExOne from "../screens/ReduxExOne";
import Pizza from "../screens/Pizza";
import Burger from "../screens/Burger";
import MyCheckList from "../screens/MyCheckList";
import AddChecklist from "../screens/AddChecklist";

export type RootStackParamList = {
  Home: undefined;
  Details: { index: number };
  ReduxExOne: undefined;
  Cart: undefined;
  Pizza: undefined;
  Burger: undefined;
  MyCheckList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyCheckList">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ReduxExOne" component={ReduxExOne} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Pizza" component={Pizza} />
        <Stack.Screen name="Burger" component={Burger} />
        <Stack.Screen name="MyCheckList" component={MyCheckList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
