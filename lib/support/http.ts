export async function readJsonResponse<T>(response: Response): Promise<T | null> {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export function getResponseError(
  response: Response,
  data: { error?: string; message?: string } | null,
  fallback: string
) {
  return data?.error || data?.message || (!response.ok ? `${fallback} (${response.status})` : fallback);
}

