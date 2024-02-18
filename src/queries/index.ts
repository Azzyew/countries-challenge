'use client';

import { QueryCache, QueryClient } from '@tanstack/react-query';
import { AxiosError, isAxiosError } from 'axios';

type APIError = {
  message: string;
  error: string;
  statusCode: 400;
};

function handleAPIError(error: AxiosError<APIError>) {
  alert(error.response?.data.message)
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: async (error, query) => {
      if (isAxiosError<APIError>(error) && !query.meta) {
        handleAPIError(error);
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
