import { Controller, useForm } from "react-hook-form";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { RegisterType } from "../types/auth.types";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { RegisterProps } from "../types/navigation.type";

export default function RegisterScreen({ navigation }: RegisterProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<RegisterType>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
  });

  const onSubmitHandler = (values: RegisterType) => {
    console.log("value register", values);
  };
  return (
    <ScrollView className="flex-1 w-full">
      <ImageBackground
        source={require("../../assets/landing.png")}
        resizeMode="cover"
        className="h-64 w-full"
      />

      <View className="flex-1 -mt-20 rounded-t-[46px] bg-white px-6 pt-8 pb-10 shadow-lg">
        <View className="flex-1 justify-between">
          {/* form */}
          <View>
            <Text className="font-bold text-[#333] text-3xl mb-6">Sign Up</Text>
            {/* fullName */}
            <View className="mb-4">
              <Text className="text-sm font-semibold text-[#555] mb-1">
                Full Name
              </Text>
              <Controller
                name="fullName"
                control={control}
                rules={{ required: "Full Name wajib diisi " }}
                render={({ field: { onChange, value } }) => (
                  <View
                    className={`flex-row items-center gap-2 border-b border-[##2196F3] ${
                      errors.fullName && "border-[#ff0000]"
                    }`}
                  >
                    <SimpleLineIcons
                      name="user"
                      size={18}
                      color={`${errors.fullName ? "#ff0000" : "#999"}`}
                    />

                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      placeholder="e.g : John Doe"
                      placeholderTextColor="#999"
                      className="text-base"
                    />
                  </View>
                )}
              />

              {errors.fullName && (
                <Text className="text-xs text-[#ff0000] mt-1">
                  {errors.fullName.message}
                </Text>
              )}
            </View>
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
                    className={`flex-row items-center gap-2 border-b border-[##2196F3] ${
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
                  <View
                    className={`flex-row items-center gap-2 border-b border-[##2196F3] ${
                      errors.password && "border-[#ff0000]"
                    }`}
                  >
                    <Ionicons
                      name="lock-closed-outline"
                      size={18}
                      color={`${errors.password ? "#ff0000" : "#999"}`}
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
              {errors.password && (
                <Text className="text-xs text-[#ff0000] mt-1">
                  {errors.password.message}
                </Text>
              )}
            </View>

            {/* Confirm Password */}
            <View className="mb-4">
              <Text className="text-sm font-semibold text-[#555] mb-1">
                Confirm Password
              </Text>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm Password wajib diisi",
                  validate: (value) =>
                    value === getValues("password") || "Password doesn't match",
                }}
                render={({ field: { onChange, value } }) => (
                  <View
                    className={`flex-row items-center gap-2 border-b border-[##2196F3] ${
                      errors.confirmPassword && "border-[#ff0000]"
                    }`}
                  >
                    <Ionicons
                      name="lock-closed-outline"
                      size={18}
                      color={`${errors.confirmPassword ? "#ff0000" : "#999"}`}
                    />

                    <TextInput
                      value={value}
                      secureTextEntry
                      onChangeText={onChange}
                      placeholder="Confirm your password"
                      placeholderTextColor="#999"
                      className="text-base"
                    />
                  </View>
                )}
              />
              {errors.confirmPassword && (
                <Text className="text-xs text-[#ff0000] mt-1">
                  {errors.confirmPassword.message}
                </Text>
              )}
            </View>
          </View>
          {/* Checkbox */}
          <View className="mb-4">
            <View className="flex-row gap-x-2">
              <Controller
                name="agreement"
                control={control}
                rules={{
                  validate: (value) =>
                    value || "Anda harus menyetujui Terms & Privacy",
                }}
                render={({ field: { onChange, value } }) => (
                  <View className="flex-row gap-x-2 items-center">
                    <Checkbox
                      value={value}
                      onValueChange={onChange}
                      color={value ? "##2196F3" : undefined}
                    />
                    <Text>I agree to Terms & Privacy</Text>
                  </View>
                )}
              />
            </View>
            {errors.agreement && (
              <Text className="text-xs text-[#ff0000] mt-1">
                {errors.agreement.message}
              </Text>
            )}
          </View>

          {/* Button */}
          <View className="mt-8">
            <Pressable
              className="py-3 bg-blue-500 rounded-2xl items-center"
              onPress={handleSubmit(onSubmitHandler)}
            >
              <Text className="text-white font-semibold text-base">
                {isSubmitting ? "Loading ..." : "Login"}
              </Text>
            </Pressable>
          </View>
        </View>
        <View className="mt-5 flex-row gap-x-2">
          <Text>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text className="text-blue-500 font-bold">Sign In</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
