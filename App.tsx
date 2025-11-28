import "./global.css";
import LoginScreen from "./src/screen/LoginScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterScreen from "./src/screen/RegisterScreen";
import TodoListScreen from "./src/screen/TodoListScreen";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <TodoListScreen />
    </SafeAreaView>
  );
}
