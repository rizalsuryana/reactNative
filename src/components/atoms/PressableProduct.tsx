import { View, Text } from "react-native";

export default function PressableProduct() {
  return (
 <Pressable
            onPress={addHandler}
            className="bg-blue-400 items-center rounded-sm h-5 w-5"
          >
            <Text className="font-bold text-[13px]">+</Text>
          </Pressable>
  );
}
