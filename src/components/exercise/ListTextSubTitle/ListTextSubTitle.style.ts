import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Typography } from "../../../theme";

const styles = StyleSheet.create({
  headerSubTitle: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.fontSizes.small,
    fontWeight: "300",
    color: Colors.grey600,
    marginTop: 4,
  },
});
export default styles;
