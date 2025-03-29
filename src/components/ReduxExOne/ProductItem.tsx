import { Button, Image, Text, View } from "react-native";
import { Product } from "../../appTypes/Products";
import styles from "./ProductItem.style";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import { AppDispatch } from "../../store/store"; // Import AppDispatch type

const ProductItem = ({
  item,
  dispatch,
}: {
  item: Product;
  dispatch: AppDispatch;
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Text style={styles.rating}>
          ⭐ {item.rating.rate} ({item.rating.count} reviews)
        </Text>
        <Button title="Add to Cart" onPress={() => dispatch(addToCart(item))} />
        <Button
          title="Remove from Cart"
          onPress={() => dispatch(removeFromCart(item.id))}
        />
      </View>
    </View>
  );
};

export default ProductItem;
