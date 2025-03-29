import { View, Text, Button, FlatList } from "react-native";
import React from "react";
import { styles } from "./Cart.style";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import CartListItem from "../components/Cart/CartListItem";

const Cart = () => {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.cartSlice
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart Items</Text>
      <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartListItem item={item} dispatch={dispatch} />
        )}
      />
    </View>
  );
};

export default Cart;
