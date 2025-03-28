import { View, Text, FlatList, TouchableOpacity, AppState } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./ReduxExOne.style";
import ProductItem from "../components/ReduxExOne/ProductItem";
import ItemSeparator from "../components/ReduxExOne/ItemSeparator";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { fetchProducts, selectProductsState } from "../store/productsSlice";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useAppDispatch, useAppSelector } from "../hooks/stateManagementHooks";
import { selectCartState } from "../store/cartSlice";

const ReduxExOne = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectProductsState);
  const { totalQuantity, totalPrice } = useAppSelector(selectCartState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
      <TouchableOpacity onPress={onTapCart}>
        <View style={styles.cartContainer}>
          <Text style={styles.cartLabel}>
            Cart -<Text style={styles.cartAmount}>{` ${totalQuantity}`}</Text>
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "900" }}> {"/"}</Text>
          <Text style={styles.cartLabel}>
            Price -<Text style={styles.cartAmount}>{` ${totalPrice}`}</Text>
          </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem item={item} dispatch={dispatch} />
        )}
        initialNumToRender={5}
        ItemSeparatorComponent={ItemSeparator}
      ></FlatList>
    </View>
  );
};

export default ReduxExOne;
