import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KeboardAvoidingExample() {
  const [descriptions, setDescriptions] = useState("");
  const [desc, setDesc] = useState<string[]>([]);
  const [isOn, setIsOn] = useState(false);

  const handleSubmit = () => {
    setDesc([...desc, descriptions]);
    setDescriptions("");
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView
        style={{ flex: 1, justifyContent: "flex-end", padding: 16, gap: 8 }}
      >
        {/* Switch atau toggle*/}
        <Text>{isOn ? "Dark Mode" : "Light Mode"}</Text>
        <Switch value={isOn} onValueChange={setIsOn} />

        {/* Keyboard avoiding untuk keyboard gak nutupin */}
        <Text style={{ fontSize: 20 }}>Keyboard Avoiding</Text>
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
        <Button
          title="Submit"
          onPress={() => {
            handleSubmit();
          }}
        />
        <Text>
          {desc.map((decs, index) => (
            <Text key={index}>{decs}</Text>
          ))}
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
