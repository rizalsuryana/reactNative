import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function SafeAreaViewExample() {
  const [descriptions, setDescriptions] = useState("");
  return (
    <>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 20 }}>SafeAreaView Example</Text>
        <TextInput
          placeholder="Descriptions"
          value={descriptions}
          onChangeText={setDescriptions}
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 4,
          }}
        />
        <Text>{descriptions}</Text>
      </SafeAreaView>
    </>
  );
}
