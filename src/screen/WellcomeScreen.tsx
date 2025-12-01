import { View, Text, Image, Pressable } from "react-native";

type Props = {
  onContinue: () => void;
};

export default function WellcomeScreen({ onContinue }: Props) {
  return (
    <View className="flex-1">
      <View className="flex-1 justify-center">
        <Image
          className="self-center h-80 w-80"
          resizeMode="contain"
          source={require("../../assets/wellcome.png")}
        />
      </View>
      <View className="px-6 mb-10 pb-10">
        <Text className="text-3xl font-bold text-gray-500">Welcome</Text>
        <Text className="mb-4 mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eum?
        </Text>
        <Pressable
          onPress={onContinue}
          className="bg-blue-500 py-3 rounded-3xl items-center active:bg-blue-900"
        >
          <Text className="text-white font-bold text-base">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
