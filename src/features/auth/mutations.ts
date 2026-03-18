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
  // Certains endpoints (inscription) renvoient `id`, d'autres (réinit) renvoient `personId`.
  // Nous supportons les deux pour éviter de casser l'inscription.
  personId?: string;
  id?: string;
  otp: string;
}

export interface ValidateOtpResponse {
  message?: string;
  token?: string;
  [key: string]: unknown;
}

export const useValidateOtpMutation = () =>
  useMutation<ValidateOtpResponse, Error, ValidateOtpPayload>({
    mutationFn: (payload) => {
      const { personId, id, otp } = payload;
      return apiFetch<ValidateOtpResponse>("/auth/confirm-user", {
        method: "POST",
        body: JSON.stringify({ id: id ?? personId, otp }),
      });
    },
  });

// --- Ask Reset (Forgot Password) ---

export interface AskResetPayload {
  countryCode: string;
  phone: string;
}

export interface AskResetResponse {
  message?: string;
  personId?: string;
  [key: string]: unknown;
}

export const useAskResetMutation = () =>
  useMutation<AskResetResponse, Error, AskResetPayload>({
    mutationFn: (payload) =>
      apiFetch<AskResetResponse>("/auth/ask-reset", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });

// --- Define Password (Reset Password) ---

export interface DefinePasswordPayload {
  personId: string;
  otp: string;
  encryptedPassword: string;
}

export interface DefinePasswordResponse {
  message?: string;
  token?: string;
  [key: string]: unknown;
}

export const useDefinePasswordMutation = () =>
  useMutation<DefinePasswordResponse, Error, DefinePasswordPayload>({
    mutationFn: (payload) =>
      apiFetch<DefinePasswordResponse>("/auth/define-password", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });
