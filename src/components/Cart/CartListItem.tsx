import { View, Text, Button } from "react-native";
import React from "react";
import { CartItem, removeFromCart } from "../../store/cartSlice";
import styles from "./CartListItem.style";
import { AppDispatch } from "../../store/store";

const CartListItem = ({
  item,
  dispatch,
}: {
  item: CartItem;
  dispatch: AppDispatch;
}) => {
  return (
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
  );
};

export default CartListItem;
