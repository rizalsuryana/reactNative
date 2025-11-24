import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ViewExample from "./src/components/intro/ViewExample";
import ImageBackgroundExample from "./src/components/intro/ImageBackgroundExample";
import ModalExample from "./src/components/intro/ModalExample";
import Counter from "./src/components/intro/Counter";
import TouchableExample from "./src/components/intro/TouchableExample";
import ActivityIndicatorExample from "./src/components/intro/ActivityIndicatorExample";
import SafeAreaViewExample from "./src/components/intro/SafeAreaViewExample";
import { SafeAreaView } from "react-native-safe-area-context";
import KeboardAvoidingExample from "./src/components/intro/KeboardAvoidingExample";
import TodoList from "./src/screens/TodoList";
import React from "react";
import FixedDimentionsExample from "./src/screens/FixedDimentionsExample";
import FlexExample from "./src/screens/FlexExample";
import FlexExample2 from "./src/screens/FlexExample2";
import ProfileCard from "./src/screens/ProfileCard";
import ProductCard from "./src/screens/ProductCard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* <SafeAreaView style={{ alignItems: "center" }}>
        <Text>Open up App.tsx to start working on your app</Text>
        <StatusBar style="auto" /> */}
      {/* exampel */}
      {/* <ViewExample /> */}
      {/* <ImageBackgroundExample /> */}
      {/* <ModalExample /> */}
      {/* <Counter /> */}
      {/* <TouchableExample /> */}
      {/* <ActivityIndicatorExample /> */}
      {/* <SafeAreaViewExample /> */}
      {/* <KeboardAvoidingExample /> */}
      {/* </SafeAreaView> */}
      {/* <TodoList /> */}
      {/* <FixedDimentionsExample /> */}
      {/* <FlexExample /> */}
      {/* <FlexExample2 /> */}
      {/* <ProfileCard /> */}
      <ProductCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
