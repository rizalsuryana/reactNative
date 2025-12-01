import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.0.2.2:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.log(error);
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("APi Error :", error.response?.data || error.message);
  }
);
