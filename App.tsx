import "./global.css";
import { Pressable, Text, View } from "react-native";
import CardCard from "./src/components/nativeWind/CardCard";
import CardScreen from "./src/components/nativeWind/CardScreen";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-100">
      {/* <Pressable className="bg-blue-600 px-6 py-3 rounded-2xl shadow-lg active:bg-blue-700">
        <Text className="text-white font-semibold text-lg">
          NativeWind Working!!!
        </Text>
      </Pressable> */}

      <CardScreen />
    </View>
  );
}
