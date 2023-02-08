import apiClient from './apiClient';

export type LoginFormData = {
  email: string;
  password: string;
};
export type RegisterFormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type AuthResponse = {
  data: {
    user: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
    token: string;
  };
  message: string;
};

export const onLogin = async (form: LoginFormData) => {
  const response = await apiClient.post<AuthResponse>('login', {
    ...form,
  });
  return response.data;
};
export const onRegister = async (form: RegisterFormData) => {
  const response = await apiClient.post<AuthResponse>('login', {
    ...form,
  });
  return response.data;
};
