import { ActivityIndicator, View } from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import WellcomeScreen from "./src/screen/WellcomeScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { restoreAuth } from "./src/store/slice/authSlice";
import AuthLoader from "./src/components/AuthLoader";

export default function App() {
  const [hasSeenOnBoarding, setHasSeenOnBoarding] = useState<boolean | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem("hasSeenOnBoarding");
        setHasSeenOnBoarding(value === "true");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    checkOnboarding();
  }, []);

  const handleFinishOnBoarding = async () => {
    await AsyncStorage.setItem("hasSeenOnBoarding", "true");
    setHasSeenOnBoarding(true);
  };

  if (loading || hasSeenOnBoarding === null) {
    return (
      <View className="flex-1 items-center justify-center bg-blue-500">
        <ActivityIndicator color="#fff" />
      </View>
    );
  }

  if (!hasSeenOnBoarding) {
    return <WellcomeScreen onContinue={handleFinishOnBoarding} />;
  }

  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1 bg-gray-200">
        <AuthLoader>
          <Navigation />
        </AuthLoader>
      </SafeAreaView>
    </Provider>
  );
}
