import { ActivityIndicator, Text } from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screen/HomeScreen";
import Navigation from "./src/navigation";
import WellcomeScreen from "./src/screen/WellcomeScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

export default function App() {
  const [hasSeenOnBoarding, setHasSeenOnBoarding] = useState<boolean | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const handleFinishOnBoarding = async () => {
    await AsyncStorage.setItem("hasSeenOnBoarding", "true");
    setHasSeenOnBoarding(true);
  };

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
    <SafeAreaView className="flex-1 bg-gray-200">
      <Navigation />
      {/* <WellcomeScreen /> */}
    </SafeAreaView>
  );
}
