import { View, Text, Button, FlatList } from "react-native";
import React from "react";
import { styles } from "./Cart.style";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { RootState } from "../store/store";

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
          <View style={styles.item}>
            <Text>
              {item.title} (x{item.quantity}) - ${item.price * item.quantity}
            </Text>
            <View style={styles.button}>
              <Button
                title="Remove"
                onPress={() => dispatch(removeFromCart(item.id))}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Cart;
