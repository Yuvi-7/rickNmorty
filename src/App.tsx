import './App.css'
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { RouterProvider } from "@tanstack/react-router"
import { router } from './router'
import { queryClient, persister } from './lib/queryClient'  
function App() {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: persister! }}>
      <div className="min-h-dvh font-sans">
        <RouterProvider router={router} />
      </div>
    </PersistQueryClientProvider>
  )
}

export default App
