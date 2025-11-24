import { View, Text, Image } from "react-native";

export default function ViewExample() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{ backgroundColor: "skyblue", padding: 16, borderRadius: 8 }}
      >
        <Text>Ini text di dalam view dengan tag Text</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            gap: 20,
            alignSelf: "center",
          }}
        >
          <Image
            style={{ width: 80, height: 80 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Image source={require("../../assets/favicon.png")} />
        </View>
      </View>
    </View>
  );
}
