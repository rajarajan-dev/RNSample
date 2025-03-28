import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartContainer: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  cartLabel: {
    textAlign: "right",
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  cartAmount: {
    color: "green",
    fontSize: 18,
    fontWeight: 800,
  },
});

export default styles;
