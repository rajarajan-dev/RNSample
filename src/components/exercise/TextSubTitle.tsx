import { Text } from "react-native";
import React from "react";
import styles from "./TextSubTitle.style";

interface TextSubTitleProp {
  title: string;
}

const TextSubTitle: React.FC<TextSubTitleProp> = ({ title }) => {
  return <Text style={styles.headerSubTitle}>{title}</Text>;
};

export default TextSubTitle;
