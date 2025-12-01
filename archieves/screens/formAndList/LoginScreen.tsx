import { Controller, useForm } from "react-hook-form";
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { LoginForm } from "../../../src/types/auth.types";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginForm) => {
    console.log("email: " + values.email);
    console.log("password" + values.password);
  };

  return (
    <View className="flex-1 w-full">
      <ImageBackground
        source={{
          uri: "https://m.media-amazon.com/images/I/21u8gLR-HeL._AC_.jpg",
        }}
        resizeMode="cover"
        className="h-64 w-full"
      />

      <View className="flex-1 -mt-20 rounded-t-[46px] bg-white px-6 pt-8 pb-10 shadow-lg">
        <View className="flex-1 justify-between">
          {/* form */}
          <View>
            <Text className="font-bold text-[#333] text-3xl mb-6">Sign In</Text>
            {/* email */}
            <View className="mb-4">
              <Text className="text-sm font-semibold text-[#555] mb-1">
                Email
              </Text>
              <Controller
                name="email"
                control={control}
                rules={{ required: "email wajib diisi " }}
                render={({ field: { onChange, value } }) => (
                  <View
                    className={`flex-row items-center gap-2 border-b border-[#f59b95] ${
                      errors.email && "border-[#ff0000]"
                    }`}
                  >
                    <Ionicons
                      name="mail-outline"
                      size={18}
                      color={`${errors.email ? "#ff0000" : "#999"}`}
                    />

                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="email@example.com"
                      placeholderTextColor="#999"
                      className="text-base"
                    />
                  </View>
                )}
              />

              {errors.email && (
                <Text className="text-xs text-[#ff0000] mt-1">
                  {errors.email.message}
                </Text>
              )}
            </View>

            {/* password */}
            <View className="mb-4">
              <Text className="text-sm font-semibold text-[#555] mb-1">
                Password
              </Text>
              <Controller
                name="password"
                control={control}
                rules={{ required: "password wajib diisi" }}
                render={({ field: { onChange, value } }) => (
                  <View className="flex-row items-center gap-2 border-b border-[#f59b95]">
                    <Ionicons
                      name="lock-closed-outline"
                      size={18}
                      color="#999"
                    />

                    <TextInput
                      value={value}
                      secureTextEntry
                      onChangeText={onChange}
                      placeholder="Enter your password"
                      placeholderTextColor="#999"
                      className="text-base"
                    />
                  </View>
                )}
              />
            </View>
          </View>

          {/* Button */}
          <View className="mt-8">
            <Pressable
              className="py-3 bg-[#f59b95] rounded-2xl items-center"
              onPress={handleSubmit(onSubmit)}
            >
              <Text className="text-white font-semibold text-base">
                {isSubmitting ? "Loading ..." : "Login"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
