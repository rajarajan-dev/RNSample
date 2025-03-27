import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";

export const MyStack = createStackNavigator({
  screens: {
    Home: Home,
    Details: Details,
  },
});
