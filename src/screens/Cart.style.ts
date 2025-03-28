import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  button: { flexGrow: 1 },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
