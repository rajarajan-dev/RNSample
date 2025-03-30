import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Typography } from "../../theme";

const styles = StyleSheet.create({
  headerSubTitle: {
    fontFamily: Typography.fontFamily.light,
    fontSize: Typography.fontSizes.medium,
    fontWeight: "400",
    color: Colors.black,
    marginTop: 4,
    transform: [{ skewX: "-10deg" }],
  },
});
export default styles;
