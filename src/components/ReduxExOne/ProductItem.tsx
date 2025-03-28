import { Image, Text, View } from "react-native";
import { Product } from "../../types/Products";
import styles from "./ProductItem.style";

const ProductItem = ({ item }: { item: Product }) => {
  console.log("Item " + item);
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
      </View>
    </View>
  );
};

export default ProductItem;
