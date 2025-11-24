import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ViewExample from "./src/components/ViewExample";
import ImageBackgroundExample from "./src/components/ImageBackgroundExample";
import ModalExample from "./src/components/ModalExample";
import Counter from "./src/components/Counter";
import TouchableExample from "./src/components/TouchableExample";
import ActivityIndicatorExample from "./src/components/ActivityIndicatorExample";
import SafeAreaViewExample from "./src/components/SafeAreaViewExample";
import { SafeAreaView } from "react-native-safe-area-context";
import KeboardAvoidingExample from "./src/components/KeboardAvoidingExample";
import TodoList from "./src/screens/TodoList";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
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
      <TodoList />
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
