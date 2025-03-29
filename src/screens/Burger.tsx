import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/stateManagementHooks";
import { orderBurger, selectBurgerSlice } from "../feature/burgerSlice";
import styles from "./Burger.style";

const Burger = () => {
  const burger = useAppSelector(selectBurgerSlice);
  const dispatch = useAppDispatch();

  const doOrderBurger = () => {
    dispatch(orderBurger());
  };
  return (
    <View style={styles.container}>
      <Text>No of burger buns available - {burger.burgerBuns}</Text>
      <Button title="Order Burger" onPress={doOrderBurger}></Button>
    </View>
  );
};

export default Burger;
