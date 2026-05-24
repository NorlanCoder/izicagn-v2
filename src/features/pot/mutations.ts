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

// --- Public Pots ---

export interface PublicPotsFilters {
  search?: string;
  state?: PotState;
  reason?: PotReason;
  currency?: PotCurrency;
  country?: string;
  tagIds?: string[];
  page?: number;
  limit?: number;
}

export interface PublicPotsResponse {
  data: Pot[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const usePublicPotsQuery = (filters: PublicPotsFilters = {}) =>
  useQuery<PublicPotsResponse>({
    queryKey: ["public-pots", filters],
    queryFn: () =>
      apiFetch<PublicPotsResponse>("/opens/pots", {
        method: "POST",
        noAuth: true,
        body: JSON.stringify({
          ...(filters.search && { search: filters.search }),
          ...(filters.state && { state: filters.state }),
          ...(filters.reason && { reason: filters.reason }),
          ...(filters.currency && { currency: filters.currency }),
          ...(filters.country && { country: filters.country }),
          ...(filters.tagIds?.length && { tagIds: filters.tagIds }),
          page: filters.page ?? 1,
          limit: filters.limit ?? 20,
        }),
      }),
  });

// --- Public Pot Detail ---

export const usePublicPotDetailQuery = (id: string) =>
  useQuery<Pot>({
    queryKey: ["public-pot-detail", id],
    queryFn: () =>
      apiFetch<Pot>(`/opens/pots/detail?id=${encodeURIComponent(id)}`, {
        method: "GET",
        noAuth: true,
      }),
    enabled: !!id,
  });

// --- Public Pot Gifts ---

export interface PotGift {
  id: string;
  amount: number;
  currency?: string;
  anonymous?: boolean;
  person?: PotPerson;
  created_at?: string;
  [key: string]: unknown;
}

export interface PotGiftsResponse {
  data: PotGift[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const usePublicPotGiftsQuery = (potId: string, page = 1, limit = 20) =>
  useQuery<PotGiftsResponse>({
    queryKey: ["public-pot-gifts", potId, page, limit],
    queryFn: () =>
      apiFetch<PotGiftsResponse>(
        `/opens/pots/gifts?potId=${encodeURIComponent(potId)}&page=${page}&limit=${limit}`,
        { method: "GET", noAuth: true }
      ),
    enabled: !!potId,
  });

// --- Gift Donate ---

export interface DonatePayload {
  potId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  anonymous: boolean;
  isOrganization: boolean;
  amount: number;
  currency: string;
  message?: string;
  operator: string;
  country: string;
  paymentPhone: string;
}

export interface DonateResponse {
  id?: string;
  message?: string;
  [key: string]: unknown;
}

export const useDonatePublicMutation = () =>
  useMutation<DonateResponse, Error, DonatePayload>({
    mutationFn: (payload) =>
      apiFetch<DonateResponse>("/gift/donate/public", {
        method: "POST",
        noAuth: true,
        body: JSON.stringify(payload),
      }),
  });

export const useDonateAuthMutation = () =>
  useMutation<DonateResponse, Error, DonatePayload>({
    mutationFn: (payload) =>
      apiFetch<DonateResponse>("/gift/donate", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });

// --- My Gifts ---

export interface MyGift {
  id: string;
  amount: number | string;
  currency?: string;
  anonymous?: boolean;
  isOrganization?: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  paymentPhone?: string;
  message?: string;
  operator?: string;
  country?: string;
  reference?: string;
  transactionId?: string | null;
  state?: "CONFIRMED" | "PENDING" | "CANCELLED" | "FAILED";
  created_at?: string;
  updated_at?: string;
  pot?: Pot;
  [key: string]: unknown;
}

interface MyGiftsResponse {
  data: MyGift[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const useMyGiftsQuery = (page = 1, limit = 20) =>
  useQuery<MyGiftsResponse>({
    queryKey: ["my-gifts", page, limit],
    queryFn: () =>
      apiFetch<MyGiftsResponse>(`/gift/my-gifts?page=${page}&limit=${limit}`, {
        method: "GET",
      }),
  });

// --- Countries ---

export interface Country {
  id: string;
  countryCode: string;
  countryName: string;
  prefix: string;
  currency: string;
  flagUrl?: string;
  status?: string;
}

interface CountriesResponse {
  data: Country[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const useCountriesQuery = () =>
  useQuery<CountriesResponse>({
    queryKey: ["countries"],
    queryFn: () =>
      apiFetch<CountriesResponse>("/countries/all?status=ACTIVE&page=1&limit=100", {
        method: "GET",
        noAuth: true,
      }),
    staleTime: 1000 * 60 * 10,
  });

// --- Telecoms ---

export interface Telecom {
  id: string;
  operatorCode: string;
  operatorName: string;
  currency: string;
  otpRequired: boolean;
  ussdCode?: string;
  status?: string;
  country: Country;
}

interface TelecomsResponse {
  data: Telecom[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const useTelecomsQuery = () =>
  useQuery<TelecomsResponse>({
    queryKey: ["telecoms"],
    queryFn: () =>
      apiFetch<TelecomsResponse>("/telecoms/all?page=1&limit=100", {
        method: "GET",
        noAuth: true,
      }),
    staleTime: 1000 * 60 * 10,
  });
