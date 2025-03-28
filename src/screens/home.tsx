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
import { RootStackParamList } from "../navigation/AppNavigator";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: React.FC<HomeScreenProps> = (prop) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();
  const challenges = [
    "Redux-Example-One",
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

  const onHandleSelection = (index: number) => {
    switch (index) {
      case 0:
        navigation.push("ReduxExOne");
        break;
      default:
        navigation.push("Details", { index });
        break;
    }
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity onPress={() => onHandleSelection(index)}>
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
