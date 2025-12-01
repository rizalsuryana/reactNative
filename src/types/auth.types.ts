export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterType = {
  // id: number;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
};

export interface LoginResponse {
  token: string;
  customer: {
    id: string;
    fullname: string;
    birthdate: string;
    address: string;
    phoneNumber: string;
    email: string;
    role: "admin" | "customer";
  };
}
type Role = "admin" | "customer";
export interface AuthUser {
  id: string;
  fullname: string;
  email: string;
  role: Role;
}
export interface AuthState {
  token: string | null;
  user: AuthUser | null;
}
