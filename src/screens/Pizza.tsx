import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./Pizza.style";
import { useAppDispatch, useAppSelector } from "../hooks/stateManagementHooks";
import { orderPizza, selectPizzaState } from "../feature/pizzaSlice";

const Pizza = () => {
  const pizza = useAppSelector(selectPizzaState);
  const dispatch = useAppDispatch();

  const doOrderPizza = () => {
    dispatch(orderPizza());
  };
  return (
    <View style={styles.container}>
      <Text>No of pizza base available - {pizza.pizzaBase}</Text>
      <Button title="Order Pizza" onPress={doOrderPizza}></Button>
    </View>
  );
};

export default Pizza;
