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

