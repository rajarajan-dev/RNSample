import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ComponentsAndProps from "../screens/ComponentsAndProps";

export const MyStack = createStackNavigator({
  screens: {
    Home: Home,
    Details: ComponentsAndProps,
  },
});
