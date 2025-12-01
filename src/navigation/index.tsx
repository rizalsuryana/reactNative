import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppNavigator from "./AppNavigator";

export default function index() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
