export type LoginForm = {
  email: string;
  password: string;
};

// create customer kan?
export interface RegisterType {
  address: string;
  birthdate: string;
  email: string;
  fullname: string;
  id: string;
  password: string;
  phoneNumber: string;
  role: Role;
}

export interface RegisterFormType extends RegisterType {
  confirmPassword: string;
  agreement: boolean;
}

export interface RegisterResponse {
  address: string;
  birthdate: string;
  email: string;
  fullname: string;
  id: string;
  phoneNumber: string;
  role: Role;
}

export interface LoginResponse {
  token: string;
  customer: {
    id: string;
    fullname: string;
    birthdate: string;
    address: string;
    phoneNumber: string;
    email: string;
    role: Role;
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
