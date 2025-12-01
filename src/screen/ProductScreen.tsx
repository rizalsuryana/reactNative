import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Product } from "../types/products.type";
import { getProducts } from "../services/product.service";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  // dipake buat infinitescroll ngambil pagenya
  const fetchProducts = async (pageNumber: number, isRefresh = false) => {
    try {
      if (!refreshing) {
        setLoading(true);
      }
      const res = await getProducts({ page: pageNumber, pageSize: 10 });
      setProducts((prev) => {
        const listProducts = isRefresh ? res.data : [...prev, ...res.data];

        // filter si produk duplikatsi
        const uniqueList = listProducts.filter(
          (item, indx, arr) =>
            indx === arr.findIndex((prod) => prod.id === item.id)
        );
        return uniqueList;
      });

      // cek masih ada halaman berikutnya?
      setHasNext(pageNumber < res.totalPages);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!refreshing) {
      fetchProducts(currentPage);
    }
  }, [currentPage]);

  // hanle Refresh
  const onRefreshHandler = async () => {
    try {
      setRefreshing(true);
      setCurrentPage(1);
      await fetchProducts(1, true);
    } catch (error) {
      setRefreshing(false);
    }
  };

  // untuk si load more / infinine scroll
  const loadMoreHandler = () => {
    if (!loading && hasNext) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && products.length === 0) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-gray-50">
        <ActivityIndicator />
        <Text className="mt-3 text-gray-500 text-base">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <View className="flex-1 bg-gray-200">
      <Text className="text-2xl font-bold text-center text-gray-800 py-4">
        Product Lists
      </Text>

      {/* List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex bg-white rounded-xl shadow-sm p-4 mb-3 mx-4">
            <Text className="text-md font-semibold text-gray-900">
              {item.productName}
            </Text>
            <Text className="text-sm text-gray-500">Stock: {item.stock}</Text>
            <View className="flex-row mt-3">
              <Text className="text-[10px] text-gray-500">Rp.</Text>
              <Text className=" text-sm font-bold text-blue-400">
                {item.productPrice}
              </Text>
              <Text>,-</Text>
            </View>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={onRefreshHandler}
        // si infinitescroll
        onEndReached={loadMoreHandler}
        // 10% dr bwh
        onEndReachedThreshold={0.1}
        // biar gak kemabali ke atas
        maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
        ListFooterComponent={
          loading && hasNext ? (
            <View className="py-3">
              <ActivityIndicator size="small" />
              <Text className="mt-2 text-center text-gray-500 text-sm">
                Loading more products...
              </Text>
            </View>
          ) : null
        }
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
