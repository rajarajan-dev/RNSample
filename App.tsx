import React from "react";
import { StyleSheet, Text, View } from "react-native";

function App(): React.JSX.Element {
  return (
    <View style={styles.constainer}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
