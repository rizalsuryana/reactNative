import { View, Text, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const material = [
  { title: "BackEnd", data: ["Springboot", "Golang"] },
  { title: "FrontEnd", data: ["ReactJs", "Vue"] },
];

export default function SectionListExample() {
  return (
    <SafeAreaView>
      <SectionList
        sections={material}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View className="pl-12">
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text className="bg-blue-500 rounded-sm text-center">
            {section.title}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
