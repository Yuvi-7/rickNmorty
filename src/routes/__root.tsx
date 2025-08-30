import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-4 max-w-5xl mx-auto">
        <Header />
        <Outlet />
      </div>

      <TanStackRouterDevtools />
    </>
  ),
})