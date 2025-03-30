import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./MyCheckList.style";
import AddIcon from "../assets/icons/addicon.svg";
import TextTitle from "../components/exercise/TextTitle";
import TextSubTitle from "../components/exercise/TextSubTitle";

const MyCheckList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextTitle title="My Checklist" />
        <TextSubTitle title="Create your own personal checklist" />
      </View>

      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 100,
          position: "absolute",
          bottom: 30,
          right: 10,
          height: 100,
        }}
      >
        <AddIcon width={70} height={70} />
      </TouchableOpacity>
    </View>
  );
};

export default MyCheckList;
