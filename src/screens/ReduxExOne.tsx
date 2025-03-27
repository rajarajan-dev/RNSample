import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./ReduxExOne.style";
import { ProductsResponse, Product } from "../types/Products";
import ProductItem from "../components/ReduxExOne/ProductItem";
import ItemSeparator from "../components/ReduxExOne/ItemSeparator";

const ReduxExOne = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://fakestoreapi.in/api/products?limit=10"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json: ProductsResponse = await response.json();

      // Validate the response structure
      if (!json.products || !Array.isArray(json.products)) {
        throw new Error("Invalid products data");
      }

      setData(json.products);
      setError(null);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(
        error instanceof Error ? error.message : "Unknown error occurred"
      );
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        refreshing={loading}
        onRefresh={fetchProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ProductItem}
        initialNumToRender={5}
        ItemSeparatorComponent={ItemSeparator}
      ></FlatList>
    </View>
  );
};

export default ReduxExOne;
