import { View, Text, FlatList, TouchableOpacity, AppState } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./ReduxExOne.style";
import ProductItem from "../components/ReduxExOne/ProductItem";
import ItemSeparator from "../components/ReduxExOne/ItemSeparator";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { fetchProducts, selectApiState } from "../store/apiSlice";
import { useAppDispatch, useAppSelector } from "../hooks/StateManagementHooks";
import { RootStackParamList } from "../navigation/AppNavigator";

const ReduxExOne = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectApiState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [cartCount, setCartCount] = useState(1);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Cart">>();

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>loading...</Text>
      </View>
    );
  }

  // User taps on the cart label
  const onTapCart = () => {
    navigation.push("Cart");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onTapCart} style={styles.cartContainer}>
        <Text style={styles.cartLabel}>
          Cart -<Text style={styles.cartAmount}>{` ${cartCount}`}</Text>
        </Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ProductItem}
        initialNumToRender={5}
        ItemSeparatorComponent={ItemSeparator}
      ></FlatList>
    </View>
  );
};

export default ReduxExOne;
