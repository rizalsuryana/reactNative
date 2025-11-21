import { ImageBackground, Text, StyleSheet } from "react-native";
import { View } from "react-native";

export default function ImageBackgroundExample() {
  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
