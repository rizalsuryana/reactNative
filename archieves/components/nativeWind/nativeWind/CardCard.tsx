import { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { ProductInterface } from "../../src/types/product.types";
import { products } from "../../src/data/products.data";

export default function CardCard() {
  const [productsData, setProductData] = useState(
    products.map((product) => ({ ...product, count: 0 }))
  );

  const addHandler = (id: number) => {
    setProductData((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const minHandler = (id: number) => {
    setProductData((prev) =>
      prev.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };
  return (
    <View className="mt-5 gap-y-2">
      {productsData.map((product) => (
        <View className="w-80 h-24 bg-white rounded-2xl" key={product.id}>
          <View className="flex-row bg-white gap-2 my-4 mx-10">
            <View className=" w-16 h-16 bg-purple-100 rounded-full justify-center items-center">
              <Image source={product.image} className="w-12 h-12" />
            </View>
            <View className="flex-1 flex-col">
              <View>
                <Text className="text-[10px]">{product.title}</Text>
                <Text className="text-[10px] underline color-gray-500">
                  {product.details}
                </Text>
              </View>
              <View className="flex-row gap my-1">
                <Text className="text-[7px]">$</Text>
                <Text className="text-[10px]">{product.price}</Text>
                <Text className="text-[10px] mx-2 color-gray-500">
                  {product.offer}
                </Text>
              </View>
            </View>

            {/* action */}
            <View className=" w-4 h-16 justify-between items-center">
              <Pressable
                onPress={() => addHandler(product.id)}
                className="bg-gray-300 items-center rounded-md h-5 w-5"
              >
                <Text className="font-bold text-[13px]">+</Text>
              </Pressable>
              <View className="items-center flex-1 w-9 justify-center align-middle">
                <Text className="text-[13px]">{product.count}</Text>
              </View>
              <Pressable
                onPress={() => minHandler(product.id)}
                disabled={product.count === 0}
                className={`items-center rounded-md h-5 w-5 ${
                  product.count === 0 ? "bg-gray-400" : "bg-gray-300"
                }`}
              >
                <Text className="font-bold text-[13px]">-</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}
      <View className="flex-row justify-between mt-5 mx-1">
        <View className="w-28 h-12">
          <Text className="text-[15px]">Total Amount</Text>
          <View className="flex-row">
            <Text className="text-[10px]">$</Text>
            <Text className="text-[15px] font-bold">27894</Text>
          </View>
        </View>
        <View>
          <Pressable className="bg-[#6D70B1] flex-row w-32 h-12 rounded-xl justify-around items-center">
            <View className="h-6 w-17">
              <Text className="color-white font-semibold">Checkout</Text>
            </View>
            <Image source={require("../../../assets/shopButton.png")} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
