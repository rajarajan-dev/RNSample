import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { styles } from "./AddChecklist.style";
import CircularIcon from "../components/exercise/CircleIcon/CircularIcon";
import useStatusBarHeight from "../hooks/useStatusBarHeight";

interface AddCheckListProps {
  setModalVisible: (visible: boolean) => void;
}

const AddChecklist: React.FC<AddCheckListProps> = ({ setModalVisible }) => {
  const statusBarHeight = useStatusBarHeight(); // Get the status bar height
  const [insertItem, setInsertItem] = useState("");
  return (
    <View style={styles.modalContainer}>
      <View
        style={[styles.insideContainer, { marginTop: statusBarHeight + 15 }]}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <CircularIcon props={styles.circleContainer} />
          </TouchableOpacity>
          <View style={styles.saveEditContainer}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.saveButton}>
                <Text style={styles.saveText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Title input box */}
        <View style={styles.titleInputBox}>
          <TextInput
            value={insertItem}
            style={styles.textInput}
            placeholder="Insert list's title"
            onChangeText={(text) => setInsertItem(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default AddChecklist;
