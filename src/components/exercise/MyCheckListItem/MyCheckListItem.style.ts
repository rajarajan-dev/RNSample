import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../theme";

const styles = StyleSheet.create({
  ListRow: {
    backgroundColor: Colors.white,
    padding: 16,
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
  },
  contentPart: {
    flex: 1,
    flexGrow: 1,
  },
  arrowPart: {
    alignItems: "stretch",
    justifyContent: "center",
  },
  arrow: {},
});
export default styles;
