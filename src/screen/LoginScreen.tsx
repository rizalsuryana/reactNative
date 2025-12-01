import { Controller, useForm } from "react-hook-form";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LoginForm } from "../types/auth.types";
import { LoginProps } from "../types/navigation.type";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { Login } from "../services/auth.service";
import { loginSuccess } from "../store/slice/authSlice";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LoginScreen({ navigation }: LoginProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [loginError, setLoginError] = useState<string | null>(null);

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

  const onSubmit = async (values: LoginForm) => {
    setLoginError(null);
    try {
      const res = await Login(values);
      const { token, customer } = res;

      dispatch(loginSuccess({ token, customer }));

      navigation.reset({
        index: 0,
        routes: [
          { name: "MainTabs", params: { screen: "Home", email: values.email } },
        ],
      });
    } catch (error) {
      console.log(error);
      setLoginError("Wrong email or password");
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* ini work dengan keyboar avoiding.... */}
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 w-full">
          <ImageBackground
            source={require("../../assets/landing.png")}
            resizeMode="cover"
            className="h-64 w-full"
          />

          <View className="flex-1 -mt-20 rounded-t-[46px] bg-white px-6 pt-8 pb-10 shadow-lg">
            <View className="flex-1 justify-between">
              {/* form */}
              <View>
                <Text className="font-bold text-[#333] text-3xl mb-6">
                  Sign In
                </Text>
                {loginError && (
                  <Text className="text-red-500 text-sm mb-4">
                    {loginError}
                  </Text>
                )}
                {/* email */}
                <View className="mb-4">
                  <Text className="text-sm font-semibold text-[#555] mb-1">
                    Email
                  </Text>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // regex cek format email
                        message: "invalid email format",
                      },
                    }}
                    render={({ field: { onChange, value } }) => (
                      <View
                        className={`flex-row items-center gap-2 border-b border-blue-500 ${
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
                    rules={{ required: "password is required" }}
                    render={({ field: { onChange, value } }) => (
                      <View className="flex-row items-center gap-2 border-b border-blue-500">
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
                  className="py-3 bg-blue-500 rounded-2xl items-center"
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text className="text-white font-semibold text-base">
                    {isSubmitting ? "Loading ..." : "Login"}
                  </Text>
                </Pressable>
                <View className="mt-5 flex-row gap-x-2">
                  <Text>Already have an account?</Text>
                  <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text className="text-blue-500 font-bold">Sign In</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
}
