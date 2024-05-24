import { getSession } from 'next-auth/react';

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function fetchWithToken(url: string, options: FetchOptions = {}) {
  const session = await getSession();

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    Authorization: `Bearer ${session?.accessToken ?? ''}`,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}
