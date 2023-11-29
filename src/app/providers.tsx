// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from 'react-query';

export function Providers({children}: { children: React.ReactNode }) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      {children}
    </NextUIProvider>
    </QueryClientProvider>
  )
}