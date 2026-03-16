export const API_BASE_URL = "https://api.beta.izicagn.com/api/v1";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions extends RequestInit {
  noAuth?: boolean;
}

export async function apiFetch<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const url = `${API_BASE_URL}${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "x-api-key": "GdclMoxvX4yyuyP7bM6eOPbvzdYfXOhCuIjbEC5Rgz3ukQ",
    ...(options.headers || {}),
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  let data: any = null;
  const text = await response.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    const errorMessage =
      (data && (data.message || data.error)) ||
      `Erreur ${response.status} lors de l'appel à l'API`;

    throw new Error(errorMessage);
  }

  return data as T;
}