import { View, Text } from "react-native";
import CardCard from "./CardCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CardScreen() {
  return (
    <View>
      <SafeAreaView className=" w-full h-full flex gap-y-2">
        <CardCard />
      </SafeAreaView>
    </View>
  );
}
