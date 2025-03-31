import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import React, { useState } from "react";
import styles from "./MyCheckList.style";
import AddIcon from "../assets/icons/addicon.svg";
import TextSubTitle from "../components/exercise/TextSubTitle/TextSubTitle";
import TextTitle from "../components/exercise/TextTitle/TextTitle";
import { MyCheckListData } from "../components/exercise/types/CheckListTypes";
import MyCheckListItem from "../components/exercise/MyCheckListItem/MyCheckListItem";
import AddChecklist from "./AddChecklist";
import useStatusBarHeight from "../hooks/useStatusBarHeight";

const MyCheckList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const checklistData: MyCheckListData = {
    MyCheckList: [
      {
        titleId: "title1",
        titleName: "My Shopping",
        createdAt: "2023-11-15T14:30:22Z",
        lastItemAdded: "Milk",
        items: [
          { itemId: "item1", name: "Milk", status: "Todo" },
          { itemId: "item2", name: "Eggs", status: "Done" },
          { itemId: "item3", name: "Bread", status: "Todo" },
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

      {/* Floating Button to Open Modal */}
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
        onPress={() => setModalVisible(true)}
      >
        <AddIcon width={70} height={70} />
      </TouchableOpacity>

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <AddChecklist setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
};

export default MyCheckList;
