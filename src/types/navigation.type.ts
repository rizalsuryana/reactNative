import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainTabs: MainTabParamList;
};

export type MainTabParamList = {
  Home: { email?: string };
  Profile: undefined;
  Product: undefined;
  Transaction: undefined;
  History: undefined;
};

export type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;
export type HomeProps = NativeStackScreenProps<RootStackParamList, "MainTabs">;
