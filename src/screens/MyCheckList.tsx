import { View, Text } from "react-native";
import React from "react";
import styles from "./MyCheckList.style";
import AddIcon from "../icons/AddIcon";

const MyCheckList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Checklist</Text>
        <Text style={styles.headerSubTitle}>
          Create your own personal checklist
        </Text>
      </View>
      <AddIcon height={100} width={200} />
    </View>
  );
};

export default MyCheckList;
