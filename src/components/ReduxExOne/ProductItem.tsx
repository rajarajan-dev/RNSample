import { Text, View } from "react-native";
import { Product } from "../../types/Products";
import styles from "./ProductItem.style";

const ProductItem = ({ item }: { item: Product }) => {
  return (
    <View style={styles.row}>
      <Text>Price: ${item.price}</Text>
      <Text>Brand: {item.brand}</Text>
    </View>
  );
};

export default ProductItem;
