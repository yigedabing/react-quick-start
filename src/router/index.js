import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

const Login = lazy(() => import('../views/login/login'))

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/login',
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
])

export default router
