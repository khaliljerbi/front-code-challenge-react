'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { useAsPathInitializer } from '@/store/router';

export function Providers({ children }: { children: React.ReactNode }) {
  useAsPathInitializer();
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}