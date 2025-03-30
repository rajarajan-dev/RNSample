import { View, Text } from "react-native";
import React from "react";
import styles from "./ListTextTitle.style";

interface ListTextTitleProp {
  title: string;
}

const ListTextTitle: React.FC<ListTextTitleProp> = ({ title }) => {
  return <Text style={styles.headerTitle}>{title}</Text>;
};

export default ListTextTitle;
