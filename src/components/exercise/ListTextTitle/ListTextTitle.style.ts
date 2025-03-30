import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Typography } from "../../../theme";

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSizes.medium,
    color: Colors.black,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
export default styles;
