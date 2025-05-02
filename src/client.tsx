import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const isProd = import.meta.env.PROD;
const router = createRouter({ routeTree, basepath: isProd ? '/dc-website' : '/' })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router

hydrateRoot(document, <StartClient router={router} />)
