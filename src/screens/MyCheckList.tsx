import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import styles from "./MyCheckList.style";
import AddIcon from "../assets/icons/addicon.svg";
import TextSubTitle from "../components/exercise/TextSubTitle/TextSubTitle";
import TextTitle from "../components/exercise/TextTitle/TextTitle";
import { MyCheckListData } from "../components/exercise/types/CheckListTypes";
import MyCheckListItem from "../components/exercise/MyCheckListItem/MyCheckListItem";

const MyCheckList = () => {
  const checklistData: MyCheckListData = {
    MyCheckList: [
      {
        titleId: "title1",
        titleName: "My Shopping",
        createdAt: "2023-11-15T14:30:22Z",
        lastItemAdded: "Milk",
        items: [
          {
            itemId: "item1",
            name: "Milk",
            status: "Todo",
          },
          {
            itemId: "item2",
            name: "Eggs",
            status: "Done",
          },
          {
            itemId: "item3",
            name: "Bread",
            status: "Todo",
          },
        ],
      },
      {
        titleId: "title2",
        titleName: "Work Tasks",
        createdAt: "2023-11-15T14:30:22Z",
        lastItemAdded: "Milk",
        items: [
          {
            itemId: "item4",
            name: "Finish React Native App",
            status: "In Progress",
          },
          {
            itemId: "item5",
            name: "Meeting with Team",
            status: "Todo",
          },
        ],
      },
      {
        titleId: "title3",
        titleName: "Personal Goals",
        createdAt: "2023-11-15T14:30:22Z",
        lastItemAdded: "Milk",
        items: [
          {
            itemId: "item6",
            name: "Read 30 pages",
            status: "Done",
          },
          {
            itemId: "item7",
            name: "Workout for 30 mins",
            status: "Todo",
          },
        ],
      },
    ],
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextTitle title="My Checklist" />
        <TextSubTitle title="Create your own personal checklist" />
      </View>
      <FlatList
        data={checklistData.MyCheckList}
        keyExtractor={(title) => title.titleId}
        renderItem={MyCheckListItem}
      />

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
