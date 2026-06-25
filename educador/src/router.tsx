import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './components/layout/RootLayout';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <h1> Página inicial</h1>,
      },
      {
        path: '/resultado',
        element: <h1> resultado da simulação</h1>,
      },
      {
        path: '/historico de simulações',
      },
    ],
  },
]);
