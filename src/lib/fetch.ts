import { auth } from '@/auth';
import { getSession } from 'next-auth/react';

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function fetchWithToken(url: string, options: FetchOptions = {}) {
  const session = await getSession();

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    Authorization: `Bearer ${session?.user.accessToken}`,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  // TODO: response로 리턴하도록 변경?
  return response;
}

export async function serverSideFetchWithToken(
  url: string,
  options: FetchOptions = {},
) {
  const session = await auth();

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    Authorization: `Bearer ${session?.user.accessToken}`,
  };

  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}${url}`, {
    ...options,
    headers,
  });
}
