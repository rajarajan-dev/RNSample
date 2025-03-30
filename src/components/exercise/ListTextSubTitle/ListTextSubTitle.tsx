import { Text } from "react-native";
import React from "react";
import styles from "./ListTextSubTitle.style";

interface ListTextSubTitleProp {
  title: string;
}

const ListTextSubTitle: React.FC<ListTextSubTitleProp> = ({ title }) => {
  return <Text style={styles.headerSubTitle}>{title}</Text>;
};

export default ListTextSubTitle;
