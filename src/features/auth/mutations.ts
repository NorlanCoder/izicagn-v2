import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "../../lib/api";

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  birthDate: string | null;
  encryptedPassord: string;
}

// Ajuste ce type selon la réponse réelle de ton backend
export interface CreateUserResponse {
  message?: string;
  token?: string;
  user?: unknown;
  [key: string]: unknown;
}

export const useCreateUserMutation = () =>
  useMutation<CreateUserResponse, Error, CreateUserPayload>({
    mutationFn: (payload) =>
      apiFetch<CreateUserResponse>("/auth/create-user", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });

// --- Encrypt ---

export interface EncryptPayload {
  data: string;
}

export interface EncryptResponse {
  encryptedData: string;
  [key: string]: unknown;
}

export const useEncryptMutation = () =>
  useMutation<EncryptResponse, Error, EncryptPayload>({
    mutationFn: (payload) =>
      apiFetch<EncryptResponse>("/auth/encrypt", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });

// --- Login ---

export interface LoginPayload {
  countryCode: string;
  phone: string;
  encryptedPassword: string;
}

export interface LoginResponse {
  message?: string;
  token?: string;
  user?: unknown;
  [key: string]: unknown;
}

export const useLoginMutation = () =>
  useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: (payload) =>
      apiFetch<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });

// --- Validate OTP ---

export interface ValidateOtpPayload {
  personId: string;
  otp: string;
}

export interface ValidateOtpResponse {
  message?: string;
  token?: string;
  [key: string]: unknown;
}

export const useValidateOtpMutation = () =>
  useMutation<ValidateOtpResponse, Error, ValidateOtpPayload>({
    mutationFn: (payload) =>
      apiFetch<ValidateOtpResponse>("/auth/validate-otp", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });

