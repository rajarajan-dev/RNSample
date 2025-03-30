import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Typography } from "../../../theme";

const styles = StyleSheet.create({
  headerSubTitle: {
    fontFamily: Typography.fontFamily.italic,
    fontSize: Typography.fontSizes.medium,
    fontWeight: "300",
    color: Colors.black,
    marginTop: 4,
    transform: [{ skewX: "-8deg" }],
  },
});
export default styles;
