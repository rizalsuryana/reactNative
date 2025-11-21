import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

export default function TouchableExample() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => console.log("Opacity Pressed")}
          style={{ backgroundColor: "#2196f3", padding: 12, borderRadius: 8 }}
        >
          <Text style={{ color: "white" }}>Opacity</Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => console.log("higlight pressed")}
          style={{ backgroundColor: "#2196f3", padding: 12, borderRadius: 8 }}
        >
          <Text style={{ color: "white" }}>Highlight</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}
