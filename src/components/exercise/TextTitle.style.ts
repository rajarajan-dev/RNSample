import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Typography } from "../../theme";

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSizes.large,
    color: Colors.black,
    fontWeight: "400",
    textTransform: "capitalize",
  },
});
export default styles;
