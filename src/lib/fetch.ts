import { getSession } from 'next-auth/react';

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function fetchWithToken(url: string, options: FetchOptions = {}) {
  const session = await getSession();

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTcxNjYyOTgxOX0.e6UCPN93rriCFtRVofhkYBIV1DYbCcK-0UqH-RWKXGc`,
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
