import { View, Text } from "react-native";
import { styles } from "./styles";

export default function FlexExample2() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={[
          styles.conteiner,
          {
            columnGap: 7,
            rowGap: 8,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
          },
        ]}
      >
        <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
      </View>
    </View>
  );
}
