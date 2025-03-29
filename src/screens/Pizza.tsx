import { Button, TextInput, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./Pizza.style";
import { useAppDispatch, useAppSelector } from "../hooks/stateManagementHooks";
import { orderPizza, selectPizzaState } from "../feature/pizzaSlice";

const Pizza = () => {
  const pizza = useAppSelector(selectPizzaState);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);

  const doOrderPizza = () => {
    dispatch(orderPizza(count));
  };
  return (
    <View style={styles.container}>
      <Text>No of pizza base available - {pizza.pizzaBase}</Text>
      <TextInput
        value={"" + count}
        placeholder="Enter the order pizza count"
        keyboardType="numeric"
        onChangeText={(text: string) => {
          setCount(Number(text));
        }}
      />
      <Button title="Order Pizza" onPress={doOrderPizza}></Button>
    </View>
  );
};

export default Pizza;
