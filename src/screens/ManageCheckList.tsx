import { View, Text, SectionList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ManageCheckList.style";
import MyCheckListItem from "../components/exercise/MyCheckListItem/MyCheckListItem";
import { MyCheckListData } from "../components/exercise/types/CheckListTypes";
const ManageCheckList = () => {
  const checklistData: MyCheckListData = {
    MyCheckList: [
      {
        titleId: "title1",
        titleName: "My Shopping",
        createdAt: "2023-11-15T14:30:22Z",
        lastItemAdded: "Milk",
        items: [
          { itemId: "item1", name: "Milk", status: "Todo" },
          { itemId: "item2", name: "Eggs", status: "Todo" },
          { itemId: "item3", name: "Bread", status: "Todo" },
        ],
      },
      {
        titleId: "title1",
        titleName: "Place To Visit",
        createdAt: "2023-11-15T14:30:22Z",
        lastItemAdded: "Mumbai",
        items: [
          { itemId: "item1", name: "Mumbai", status: "Todo" },
          { itemId: "item2", name: "Chennai", status: "Done" },
          { itemId: "item3", name: "Thanjavur", status: "Todo" },
        ],
      },
    ],
  };

  // Transform checklistData into sections (Todo & Done)
  const getSections = () => {
    var todoList = checklistData.MyCheckList[0].items.filter(
      (item) => item.status === "Todo"
    );

    var doneList = checklistData.MyCheckList[0].items.filter(
      (item) => item.status === "Done"
    );

    var response = [];
    if (todoList && todoList.length > 1) {
      response.push({
        title: "Todo",
        data: todoList,
      });
    }
    if (doneList && doneList.length > 1) {
      response.push({
        title: "Done",
        data: doneList,
      });
    }

    return response;
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={getSections()}
        keyExtractor={(item) => item.itemId}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, item.status === "Done" && styles.completed]}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ManageCheckList;
