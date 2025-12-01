import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Product } from "../types/products.type";
import { getProducts } from "../services/product.service";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductScreen() {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await fetchProduct();
    } catch (error) {
      setRefreshing(false);
    }
  };

  const fetchProduct = async () => {
    try {
      if (!refreshing) {
        setLoading(true);
      }
      const res = await getProducts();
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading && products.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text>ProductScreen</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row gap-x-3 gap-y-2">
            <Text className="">{item.productName}</Text>
            <Text>{item.stock}</Text>
            <Text>{item.productPrice}</Text>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListEmptyComponent={
          !loading ? (
            <Text className="flex-1 items-center justify-center">
              Product Not Available
            </Text>
          ) : null
        }
      />
    </View>
  );
}
