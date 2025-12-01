import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreAuth } from "../store/slice/authSlice";

export default function AuthLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      const user = await AsyncStorage.getItem("user");
      if (token && user) {
        dispatch(restoreAuth({ token, user: JSON.parse(user) }));
      }
    };
    loadAuth();
  }, [dispatch]);

  return <>{children}</>;
}
