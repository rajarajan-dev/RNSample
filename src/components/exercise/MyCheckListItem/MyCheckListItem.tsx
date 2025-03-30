import { View, Text } from "react-native";
import React from "react";
import styles from "./MyCheckListItem.style";
import ListTextTitle from "../ListTextTitle/ListTextTitle";
import { ChecklistCategory } from "../types/CheckListTypes";
import ListTextSubTitle from "../ListTextSubTitle/ListTextSubTitle";
import IconArrow from "../../../assets/icons/iconArrow.svg";

const MyCheckListItem = ({ item }: { item: ChecklistCategory }) => {
  return (
    <View style={styles.ListRow}>
      <View style={styles.contentPart}>
        <ListTextTitle title={item.titleName} />
        <ListTextSubTitle title={`Date created:  ${item.createdAt}`} />
        <ListTextSubTitle title={`Last item added:  ${item.lastItemAdded}`} />
      </View>
      <View style={styles.arrowPart}>
        <IconArrow width={15} height={15} style={styles.arrow} />
      </View>
    </View>
  );
};

export default MyCheckListItem;
