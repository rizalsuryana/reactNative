import { View, Text, Pressable } from "react-native";
import { HomeProps } from "../types/navigation.type";

export default function HomeScreen({ navigation, route }: HomeProps) {
  //   const { email } = route.params;
  const state = navigation.getState().index;
  return (
    <View className="items-center">
      <Text>State ke-{state}</Text>
      <Text>HomeScreen</Text>
      {/* <Text>{email}</Text> */}
      <View className="flex-row justify-center gap-x-2 mt-5">
        {/* Goback */}
        <Pressable
          // Kembali kehalaman sebelumnya
          onPress={() => navigation.goBack()}
          className="bg-blue-400 px-2 pt-2 rounded-lg"
        >
          <Text className="text-white font-bold">Back</Text>
        </Pressable>

        {/* Go home */}
        <Pressable
          className="bg-blue-500 px-2 py-2 items-center rounded-lg "
          //   onPress={() =>
          //     navigation.push("MainTabs", { sc email: "emaillain@example.com" })
          //   }
        >
          <Text className="text-white font-bold">Home Lain</Text>
        </Pressable>

        {/* Pop bisa di kasih argumen misalkan (2) --> back 2x*/}
        <Pressable
          // Kembali kehalaman sebelumnya 2x
          onPress={() => navigation.pop(3)}
          className="bg-blue-600 px-2 pt-2 rounded-lg"
        >
          <Text className="text-white font-bold">Pop x2</Text>
        </Pressable>

        {/* Pop to Top --> kembali ke stack paling bawah */}
        <Pressable
          // Kembali stack paling awal
          onPress={() => navigation.popToTop()}
          className="bg-blue-700 px-2 pt-2 rounded-lg"
        >
          <Text className="text-white font-bold">Pop to Top</Text>
        </Pressable>
      </View>
    </View>
  );
}
