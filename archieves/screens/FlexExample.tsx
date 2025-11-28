import { View, Text } from "react-native";

export default function FlexExample() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }}></View>
        <View style={{ flex: 2, backgroundColor: "skyblue" }}></View>
        <View style={{ flex: 3, backgroundColor: "steelblue" }}></View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "aquamarine" }}></View>
        <View style={{ flex: 2, backgroundColor: "green" }}></View>
        <View style={{ flex: 3, backgroundColor: "darkgreen" }}></View>
      </View>
    </>
  );
}
