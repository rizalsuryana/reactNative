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
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { RegisterProps } from "../types/navigation.type";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterFormType, RegisterType } from "../types/auth.types";
import { useState } from "react";
import { Register } from "../services/auth.service";
import uuid from "react-native-uuid";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function RegisterScreen({ navigation }: RegisterProps) {
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
    watch,
  } = useForm<RegisterFormType>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      birthdate: "",
      phoneNumber: "",
      id: "",
      role: "customer",
      agreement: false,
    },
  });

  const onSubmitHandler = async (values: RegisterFormType) => {
    setRegisterError(null);
    try {
      const payload: RegisterType = {
        address: values.address,
        birthdate: values.birthdate,
        email: values.email,
        fullname: values.fullname,
        id: uuid.v4().toString(),
        password: values.password,
        phoneNumber: values.phoneNumber,
        role: "customer",
      };

      await Register(payload);

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error: any) {
      setRegisterError(error.response?.data?.message || "Failed to Register");
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
        <ImageBackground
          source={require("../../assets/landing.png")}
          resizeMode="cover"
          className="h-64 w-full"
        />

        <View className="-mt-20 rounded-t-[46px] bg-white px-6 pt-8 pb-10 shadow-lg">
          <Text className="font-bold text-[#333] text-3xl mb-6">Sign Up</Text>
          {registerError && (
            <Text className="text-red-500 text-sm mb-4">{registerError}</Text>
          )}

          {/* Fullname */}
          <Text className="text-sm font-semibold text-[#555] mb-1">
            Full Name
          </Text>
          <Controller
            name="fullname"
            control={control}
            rules={{ required: "Full Name wajib diisi" }}
            render={({ field: { onChange, value } }) => (
              <View
                className={`flex-row items-center gap-2 border-b border-blue-500 ${
                  errors.fullname && "border-[#ff0000]"
                }`}
              >
                <SimpleLineIcons
                  name="user"
                  size={18}
                  color={`${errors.fullname ? "#ff0000" : "#999"}`}
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
          {errors.fullname && (
            <Text className="text-xs text-[#ff0000] mt-1">
              {errors.fullname.message}
            </Text>
          )}

          {/* Email */}
          <Text className="text-sm font-semibold text-[#555] mb-1 mt-4">
            Email
          </Text>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email wajib diisi",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Format email tidak valid",
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
                  keyboardType="email-address"
                  autoCapitalize="none"
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

          {/* Password */}
          <Text className="text-sm font-semibold text-[#555] mb-1 mt-4">
            Password
          </Text>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password wajib diisi",
              minLength: { value: 6, message: "Password minimal 6 karakter" },
            }}
            render={({ field: { onChange, value } }) => (
              <View
                className={`flex-row items-center gap-2 border-b border-blue-500 ${
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

          {/* Confirm Password */}
          <Text className="text-sm font-semibold text-[#555] mb-1 mt-4">
            Confirm Password
          </Text>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password wajib diisi",
              validate: (value) =>
                value === getValues("password") || "Password tidak sama",
            }}
            render={({ field: { onChange, value } }) => (
              <View
                className={`flex-row items-center gap-2 border-b border-blue-500 ${
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

          {/* Address */}
          <Text className="text-sm font-semibold text-[#555] mb-1 mt-4">
            Address
          </Text>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Alamat wajib diisi" }}
            render={({ field: { onChange, value } }) => (
              <View
                className={`flex-row items-center gap-2 border-b border-blue-500 ${
                  errors.address && "border-[#ff0000]"
                }`}
              >
                <Ionicons
                  name="location-outline"
                  size={18}
                  color={`${errors.address ? "#ff0000" : "#999"}`}
                />
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Alamat lengkap"
                  placeholderTextColor="#999"
                  className="text-base"
                />
              </View>
            )}
          />
          {errors.address && (
            <Text className="text-xs text-[#ff0000] mt-1">
              {errors.address.message}
            </Text>
          )}

          {/* tgl lahir pic calender */}
          <Text className="text-sm font-semibold text-[#555] mb-1 mt-4">
            Birthdate
          </Text>
          <Pressable
            onPress={() => setShowDatePicker(true)}
            className={`border-b border-blue-500 py-2 ${
              errors.birthdate && "border-[#ff0000]"
            }`}
          >
            <Text className="text-base text-[#333]">
              {watch("birthdate")
                ? // diformat jd yyy-di tampilan
                  new Date(watch("birthdate")).toISOString().split("T")[0]
                : "Pilih tanggal lahir"}
            </Text>
          </Pressable>
          {showDatePicker && (
            <DateTimePicker
              value={
                watch("birthdate") ? new Date(watch("birthdate")) : new Date()
              }
              mode="date"
              display={Platform.OS === "ios" ? "inline" : "calendar"}
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  const iso = selectedDate.toISOString();
                  setValue("birthdate", iso, { shouldValidate: true });
                }
              }}
            />
          )}
          {errors.birthdate && (
            <Text className="text-xs text-[#ff0000] mt-1">
              {errors.birthdate.message}
            </Text>
          )}

          {/* Phone Number */}
          <Text className="text-sm font-semibold text-[#555] mb-1 mt-4">
            Phone Number
          </Text>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "Nomor HP wajib diisi" }}
            render={({ field: { onChange, value } }) => (
              <View
                className={`flex-row items-center gap-2 border-b border-blue-500 ${
                  errors.phoneNumber && "border-[#ff0000]"
                }`}
              >
                <Ionicons
                  name="call-outline"
                  size={18}
                  color={`${errors.phoneNumber ? "#ff0000" : "#999"}`}
                />
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="08xxxxxxxxxx"
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                  className="text-base"
                />
              </View>
            )}
          />
          {errors.phoneNumber && (
            <Text className="text-xs text-[#ff0000] mt-1">
              {errors.phoneNumber.message}
            </Text>
          )}

          {/* Agreement */}
          <View className="mt-4">
            <Controller
              name="agreement"
              control={control}
              rules={{
                validate: (value) =>
                  value || "Anda harus menyetujui Terms & Privacy",
              }}
              render={({ field: { onChange, value } }) => (
                <View className="flex-row items-center">
                  <Checkbox value={value} onValueChange={onChange} />
                  <Text className="ml-2">I agree to Terms & Privacy</Text>
                </View>
              )}
            />
            {errors.agreement && (
              <Text className="text-xs text-[#ff0000] mt-1">
                {errors.agreement.message}
              </Text>
            )}
          </View>

          {/* Submit */}
          <Pressable
            className="py-3 bg-blue-500 rounded-2xl items-center mt-6"
            onPress={handleSubmit(onSubmitHandler)}
          >
            <Text className="text-white font-semibold text-base">
              {isSubmitting ? "Loading ..." : "Register"}
            </Text>
          </Pressable>

          {/* Footer */}
          <View className="mt-5 flex-row gap-x-2">
            <Text>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text className="text-blue-500 font-bold">Sign In</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
}
