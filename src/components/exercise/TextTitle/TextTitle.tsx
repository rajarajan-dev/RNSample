import { View, Text } from "react-native";
import React from "react";
import styles from "./TextTitle.style";

interface TextTitleProp {
  title: string;
}

const TextTitle: React.FC<TextTitleProp> = ({ title }) => {
  return <Text style={styles.headerTitle}>{title}</Text>;
};

export default TextTitle;
