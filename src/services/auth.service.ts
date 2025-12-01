import { LoginForm, LoginResponse } from "../types/auth.types";
import { api } from "./api";

export async function Login(payload: LoginForm): Promise<LoginResponse> {
  const response = await api.post("/auth/login", payload);
  return response.data;
}
