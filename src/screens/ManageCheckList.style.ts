import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  item: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 5,
    borderRadius: 5,
  },
  completed: { backgroundColor: "#c8e6c9" }, // Light green for completed items
  itemText: { fontSize: 16 },
});
export default styles;
