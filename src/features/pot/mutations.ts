import { useMutation, useQuery } from "@tanstack/react-query";
import { apiFetch } from "../../lib/api";

// --- Tags ---

export interface Tag {
  id: string;
  name: string;
  slug: string;
  type: string;
}

interface TagsResponse {
  data: Tag[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const useTagsQuery = () =>
  useQuery<TagsResponse>({
    queryKey: ["tags"],
    queryFn: () =>
      apiFetch<TagsResponse>("/tools/all?type=TAGS&page=1&limit=100", {
        method: "GET",
        noAuth: true,
      }),
  });

// --- Upload Files ---

export const useUploadFilesMutation = () =>
  useMutation<string[], Error, FormData>({
    mutationFn: (formData) =>
      apiFetch<string[]>("/files/upload-files", {
        method: "POST",
        body: formData,
        isFormData: true,
      }),
  });

// --- Create Cagnotte ---

export interface ContrepartiePayload {
  title: string;
  amount: number;
}

export interface CreateCagnottePayload {
  reason: string;
  tags: string[];
  country: string;
  city: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  financialObject: number;
  currency: string;
  images: string[];
  contreparties: ContrepartiePayload[];
}

export interface CreateCagnotteResponse {
  id?: string;
  message?: string;
  [key: string]: unknown;
}

export const useCreateCagnotteMutation = () =>
  useMutation<CreateCagnotteResponse, Error, CreateCagnottePayload>({
    mutationFn: (payload) =>
      apiFetch<CreateCagnotteResponse>("/pot/create", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });

// --- My Pots ---

export type PotState = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "PAUSED" | "STOPPED";
export type PotReason = "FOR_ME" | "FOR_COMMUNITY" | "FOR_PROJECT";
export type PotCurrency = "XOF" | "USD" | "EUR";

export interface PotPerson {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  created_at?: string;
}

export interface PotContrepartie {
  title: string;
  amount: number;
}

export interface Pot {
  id: string;
  title: string;
  description?: string;
  reason: PotReason;
  state: PotState;
  financialObject: number | string;
  currency: PotCurrency;
  country?: string;
  city?: string;
  startDate?: string;
  endDate?: string;
  images?: string[];
  collectedAmount?: number;
  realAmount?: number | string;
  contributorsCount?: number;
  donationsCount?: number;
  ref?: string;
  slug?: string;
  tags?: Tag[];
  contreparties?: PotContrepartie[];
  person?: PotPerson;
  created_at?: string;
  updated_at?: string;
  [key: string]: unknown;
}

export interface MyPotsFilters {
  search?: string;
  state?: PotState;
  reason?: PotReason;
  currency?: PotCurrency;
  page?: number;
  limit?: number;
}

interface MyPotsResponse {
  data: Pot[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const useMyPotsQuery = (filters: MyPotsFilters = {}) => {  const params = new URLSearchParams();
  if (filters.search) params.set("search", filters.search);
  if (filters.state) params.set("state", filters.state);
  if (filters.reason) params.set("reason", filters.reason);
  if (filters.currency) params.set("currency", filters.currency);
  params.set("page", String(filters.page || 1));
  params.set("limit", String(filters.limit || 20));

  return useQuery<MyPotsResponse>({
    queryKey: ["my-pots", filters],
    queryFn: () =>
      apiFetch<MyPotsResponse>(`/pot/my-pots?${params.toString()}`, {
        method: "GET",
      }),
  });
};

// --- Get Pot By ID ---

export const useGetPotByIdQuery = (id: string) =>
  useQuery<Pot>({
    queryKey: ["pot", id],
    queryFn: () =>
      apiFetch<Pot>(`/pot/get-by-id?id=${id}`, {
        method: "GET",
      }),
    enabled: !!id,
  });

// --- Update Pot ---

export interface UpdatePotPayload {
  id: string;
  reason: string;
  tags: string[];
  country: string;
  city: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  financialObject: number;
  currency: string;
  images: string[];
  contreparties: ContrepartiePayload[];
}

export const useUpdatePotMutation = () =>
  useMutation<CreateCagnotteResponse, Error, UpdatePotPayload>({
    mutationFn: (payload) =>
      apiFetch<CreateCagnotteResponse>("/pot/update", {
        method: "PUT",
        body: JSON.stringify(payload),
      }),
  });
