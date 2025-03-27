import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import "./Home.style";
import { styles } from "./Home.style";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: React.FC<HomeScreenProps> = (prop) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();
  const challenges = [
    "Components and Props",
    "State Management",
    "Navigation",
    "Styling",
    "Handling User Input",
    "API Integration",
    "Animations",
    "Platform-Specific Code",
    "Hooks",
    "Testing",
  ];

  const onHandleSelection = (item: string) => {
    navigation.push("Details");
  };

  const renderItem = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity onPress={() => onHandleSelection(item)}>
        <Text style={styles.listItem}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={challenges}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
