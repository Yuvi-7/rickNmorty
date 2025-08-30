import { QueryClient } from "@tanstack/react-query"
import { persistQueryClient } from "@tanstack/react-query-persist-client"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

export const persister = typeof window !== "undefined"
  ? createSyncStoragePersister({ storage: window.localStorage })
  : undefined

if (persister) {
  persistQueryClient({ queryClient, persister })
}
