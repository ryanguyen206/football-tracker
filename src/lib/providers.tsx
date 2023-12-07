'use client'
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}
