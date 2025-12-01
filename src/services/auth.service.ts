import {
  LoginForm,
  LoginResponse,
  RegisterResponse,
  RegisterType,
} from "../types/auth.types";
import { api } from "./api";

export async function Login(payload: LoginForm): Promise<LoginResponse> {
  const response = await api.post("/auth/login", payload);
  return response.data;
}

export async function Register(
  payload: RegisterType
): Promise<RegisterResponse> {
  const response = await api.post("/auth/register", payload);
  return response.data;
}
