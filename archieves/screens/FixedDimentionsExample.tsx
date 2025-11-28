import { View, Text } from "react-native";
import { styles } from "./styles";

export default function FixedDimentionsExample() {
  return (
    <View style={styles.conteiner}>
      <Text>FixedDimentionsExample</Text>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "powderblue",
          borderRadius: 5,
        }}
      ></View>
      <View
        style={{
          width: 88,
          height: 88,
          backgroundColor: "blue",
          borderRadius: 5,
        }}
      ></View>
      {/* bisa digabung cssnya ama inline css */}
      <Text style={[styles.bigFont, styles.red, { fontWeight: "bold" }]}>
        Ini Text
      </Text>
    </View>
  );
}
