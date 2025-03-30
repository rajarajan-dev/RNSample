import { StyleSheet } from "react-native";
import { Typography, Colors } from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    color: Colors.nav30,
  },
  headerContainer: {},
  headerTitle: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.fontSizes.large,
    color: Colors.black,
    fontWeight: "400",
    textTransform: "capitalize",
  },
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
