import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const trainess = [
  { id: "1", name: "Tasya" },
  { id: "2", name: "Yusuf" },
  { id: "3", name: "Joshua" },
];

export default function FlatListExample() {
  return (
    <SafeAreaView>
      <FlatList
        data={trainess}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-1 bg-blue-300 p-2 rounded-md items-center">
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
